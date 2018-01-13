const { Pool, Client } = require('pg');

const pool = new Pool({
    user: 'dev',
    host: 'localhost',
    database: 'pm',
    password: '',
    port: 5432,
})

module.exports = {
    query: (text, params, callback) => {
        const start = Date.now();

        return pool.query(text, params, (err, res) => {
            const duration = Date.now() - start;
            console.log('executed query', { text, duration, rows: res.rowCount })
            callback(err, res);
        });
    },
    getClient: (callback) => {
        pool.connection((err, client, done) => {
            const query = client.query.bind(client);

            client.query = () => {
                client.lastQuery = arguments;
                client.query.apply(client, arguments);
            }

            const timeout = setTimeout(() => {
                console.error('A client has been checked out for more than 5 seconds!');
                console.error(`The last executed query on this client was: ${client.lastQuery}`);
            }, 5000)

            const release = (err) => {
                done(err);

                clearTimeout(timeout);
                client.query = query;
            }
            callback(err, client, done);
        })
    }
}

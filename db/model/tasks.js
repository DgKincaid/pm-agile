const db = require('../database');

var tasks = [
    {
      id: 2,
      name: 'Test Task 2',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis porttitor laoreet. Nam molestie nunc sed velit tincidunt, ac cursus velit lacinia. Duis semper urna quis gravida condimentum. ",
      state: 'to_do',
      assigned_to: 'John Smith'
    },
    {
      id: 3,
      name: 'Test Task 1',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis porttitor laoreet. Nam molestie nunc sed velit tincidunt, ac cursus velit lacinia. Duis semper urna quis gravida condimentum. ",
      state: 'to_do',
      assigned_to: 'John Smith'
    },
    {
      id: 4,
      name: 'Test Task 3',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis porttitor laoreet. Nam molestie nunc sed velit tincidunt, ac cursus velit lacinia. Duis semper urna quis gravida condimentum. ",
      state: 'done',
      assigned_to: 'John Smith'
    },
    {
        id: 5,
        name: 'Test Task 3',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis porttitor laoreet. Nam molestie nunc sed velit tincidunt, ac cursus velit lacinia. Duis semper urna quis gravida condimentum. ",
        state: 'in_progress',
        assigned_to: 'John Smith'
    }
  ]

const taskDA = new function(){
    this.test = () => {
        return db.query('SELECT NOW()', [], (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log(res.rows);
        })
    }

    this.createTable = () => {
        return db.query('CREATE TABLE tasks(id SERIAL PRIMARY KEY, name VARCHAR(64), description VARCHAR(256), state VARCHAR(32), assigned_to VARCHAR(64), created_dttm TIMESTAMP, modified_dttm TIMESTAMP)', [], (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log(res.rows);
        })
    }

    this.addTask = (task, callback) => {
        let currentDate = new Date().toISOString();
        return db.query('INSERT INTO tasks(name, description, state, assigned_to, created_dttm, modified_dttm) values($1, $2, $3, $4, $5, $6)', 
            [task.name, task.description, task.state, task.assigned_to, currentDate, currentDate], callback);
    }

    this.getTasks = (callback) => {
        return db.query('SELECT * FROM tasks', [], callback);
    }

    this.updateTask = (task, callback) => {
        let currentDate = new Date().toISOString();

        return db.query('UPDATE tasks SET name=$2, description=$3, state=$4, assigned_to=$5, modified_dttm=$6 WHERE id=$1', 
        [task.id, task.name, task.description, task.state, task.assigned_to, currentDate], callback);
    }
}

module.exports = taskDA;


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskBoardComponent} from '../components/task-board/task-board.component';

const routes: Routes = [
    { path: '', redirectTo: '/task-board', pathMatch: 'full' },
    { path: 'task-board', component: TaskBoardComponent }
]

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
    declarations: []
})

export class AppRoutingModule {}

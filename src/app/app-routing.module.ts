import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent, TaskBoardComponent } from '../components/index';

const routes: Routes = [
    { path: '', redirectTo: '/task-board', pathMatch: 'full' },
    { path: 'task-board', component: TaskBoardComponent },
    { path: 'add', component: AddComponent }
]

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
    declarations: []
})

export class AppRoutingModule {}

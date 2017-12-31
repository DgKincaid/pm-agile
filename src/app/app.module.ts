import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatCardModule, MatIconModule, MatGridListModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';

import { SideNavComponent, TaskBoardComponent, TaskColumnComponent, TaskComponent, TopBarComponent } from '../components/index';

import { TaskService } from '../shared/index';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TaskBoardComponent,
    TopBarComponent,
    TaskColumnComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FlexLayoutModule,
    
    //Material Design ImportsK
    MatButtonModule,
    MatCardModule,
    MatIconModule, 
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

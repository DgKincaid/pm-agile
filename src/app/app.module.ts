
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatGridListModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';

import { AddComponent, SideNavComponent, TaskBoardComponent, TaskColumnComponent, TaskComponent, TopBarComponent } from '../components/index';

import { TaskService } from '../shared/index';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TaskBoardComponent,
    TopBarComponent,
    TaskColumnComponent,
    TaskComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    FlexLayoutModule,
    
    //Material Design ImportsK
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

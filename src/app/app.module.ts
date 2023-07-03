import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Task1Component } from './Tasks/task1/task1.component';
import { Task2Component } from './Tasks/task2/task2.component';
import { Task3Component } from './Tasks/task3/task3.component';
import { Task4Component } from './Tasks/task4/task4.component';
import { Task5Component } from './Tasks/task5/task5.component';
import { Task6Component } from './Tasks/task6/task6.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    Task6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

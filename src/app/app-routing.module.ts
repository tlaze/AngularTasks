import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { Task1Component } from 'src/app/Tasks/task1/task1.component';
import { Task2Component } from 'src/app/Tasks/task2/task2.component';
import { Task3Component } from 'src/app/Tasks/task3/task3.component';
import { Task4Component } from 'src/app/Tasks/task4/task4.component';
import { Task5Component } from 'src/app/Tasks/task5/task5.component';
import { Task6Component } from 'src/app/Tasks/task6/task6.component';

const routes: Routes = [

  {path: "task1", component: Task1Component},
  {path: "task2", component: Task2Component},
  {path: "task3", component: Task3Component},
  {path: "task4", component: Task4Component},
  {path: "task5", component: Task5Component},
  {path: "task6", component: Task6Component}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomepageComponent } from 'src/app/Home/homepage/homepage.component';
import { Task1Component } from 'src/app/Tasks/task1/task1.component'; 

const routes: Routes = [
  {path: "home", component: HomepageComponent},
  {path: "task1", component: Task1Component},
  {path: "**", component: HomepageComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

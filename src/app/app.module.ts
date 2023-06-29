import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { Task1Component } from './Tasks/task1/task1.component';
import { Task2Component } from './Tasks/task2/task2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    Task1Component,
    Task2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

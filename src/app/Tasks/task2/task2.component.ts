import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {

  public todo: string = "";
  
  public items : string[] = [];

  addItem():void{
    this.items.push(this.todo);
  }

  removeItem(index:number):void{
    this.items.splice(index,1);
  }

}

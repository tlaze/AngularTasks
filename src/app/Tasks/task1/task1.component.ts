import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})

export class Task1Component {

  value:number = 0;

  increase():void{
    this.value++;
  }

  decrease():void{
    if(this.value > 0){
      this.value--;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})


export class Task4Component{

  ngOnInit():void{
    this.filter = this.products
  }

  headers = ["Name", "Price"];
  products: {Name: string, Price: number}[] = [
    {
      Name : "Desktop",
      Price: 800
    },
    {
      Name : "Mobile",
      Price : 1000
    },
    {
      Name : "Laptop",
      Price: 1300
    },    {
      Name : "Mouse",
      Price: 100
    },    {
      Name : "Keyboard",
      Price: 200
    },
    {
      Name : "Headphones",
      Price: 200
    }
  ]

  filter:{ Name: string, Price: number}[] = [];

  search(text:string):void{
    if(text.trim()===''){
      this.filter = this.products
    }
    else{
      this.filter = this.products.filter(product => product.Name.toLowerCase().includes(text.toLowerCase()))
    }
  }
  

}

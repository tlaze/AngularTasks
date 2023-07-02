import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  name:string="";
  email:string="";
  contact:string="";
  password:string="";

  user:any ={
    name:"",
    email:"",
    contact:"",
    password:""
  }


  validated = false;

  submit():void{

    this.user.name = this.name;
    this.user.email = this.email;
    this.user.contact = this.contact;
    this.user.password = this.password
    console.log(this.user);

    this.validated=true;

  }

}

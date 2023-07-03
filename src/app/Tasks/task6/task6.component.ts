import { Component } from '@angular/core';
import { UserDetailsService } from 'src/app/Services/user-details.service';
@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component {

  users : any[] = [];

  constructor(private userDetailsService: UserDetailsService){

    this.userDetailsService.getAllUsers().subscribe(data => {
      this.users = data as any[]
    })
  }
}

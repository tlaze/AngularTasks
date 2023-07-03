import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private httpClient : HttpClient) { }

  getAllUsers() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
}

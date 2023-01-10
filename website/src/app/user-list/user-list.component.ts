import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserDetails {
  id: number,
  birthDate: string,
  firstName: string,
  lastName: string,
  gender: 'M' | 'F',
  created: string
}

export interface UserService {
  items: UserDetails[]
}

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1:8080/users"

  users: UserDetails[] = [];

  ngOnInit(): void {
    this.http.get<UserService>(this.url)
      .subscribe(data => this.users = data.items);
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: '.add-new-user-row',
  templateUrl: './add-new-user-row.component.html',
  styleUrls: ['./add-new-user-row.component.scss']
})
export class AddNewUserRowComponent {
  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1:8080/users"
  id="";
  birthDate="";
  firstName="";
  lastName="";
  gender="";
  created="";

  add() {
    this.http.post(this.url, {
      id:this.id,
      birthDate: this.birthDate,
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      created: this.created
    }).subscribe()
  }
}

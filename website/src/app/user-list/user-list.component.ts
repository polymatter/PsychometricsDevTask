import { Component } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users = [
    {
      id: 10001,
      birth_date: '1953-09-02',
      first_name: 'Georgi',
      last_name: 'Facello',
      gender: 'M',
      created: '1986-06-26'
    },
    {
      id: 10002,
      birth_date: '1964-06-02',
      first_name: 'Bezalel',
      last_name: 'Simmel',
      gender: 'F',
      created: '1985-11-21'
    }
  ]
}

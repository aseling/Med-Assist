import { User } from './../generic.interface';
import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})

export class ManageUsersComponent implements OnInit {
  users: User[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.usersList.subscribe(list => {
      this.users = list;
    });
  }
}

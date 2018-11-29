import { Router } from '@angular/router';
import { User } from '../generic.interface';
import { ApiService } from '../services/api.service';
import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})

export class UsersListComponent implements OnInit {
  users: User[];

  constructor(private apiService:ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.usersList.subscribe(list => {
      this.users = list.filter((item) => {
        return item.permissions === false || !item.permissions;
      })
    });
  }

  onClick(_id: string, name: string) {
    this.router.navigate(["users-list/", _id])
  }
}

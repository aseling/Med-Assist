import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  isOpen = false;
  authorized:boolean = false;
  user:string;
  imagePath = './assets/img/default-user.png';
  isAdmin = false;

  constructor(private apiService:ApiService) {
  }

  ngOnInit() {
    this.apiService.authorized.subscribe(value => {
      this.authorized = value;
    });

    this.apiService.user.subscribe(user => {
      this.user = user;
    });

    this.apiService.imagePath.subscribe(path => {
      if (path === 'no image') {
        this.imagePath = './assets/img/default-user.png';
      } else {
        this.imagePath = path;
      }
    });

    this.apiService.permissions.subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
  }
}

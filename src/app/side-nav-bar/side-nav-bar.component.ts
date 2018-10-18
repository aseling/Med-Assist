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

  constructor(private apiService:ApiService) {
  }

  ngOnInit() {
    this.apiService.authorized.subscribe(value => {
      this.authorized = value;
    });

    this.apiService.user.subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }
}

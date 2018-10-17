import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent implements OnInit {
  authorized:boolean = false;

  constructor(private apiService:ApiService, private router:Router) {
  }

  ngOnInit() {
    this.apiService.authorized.subscribe(value => {
      this.authorized = value;
    });
  }

  logout() {
    this.apiService.unauthorizeUser();
  }
}

import { Component, OnInit } from '@angular/core';
import {ApiService} from "./services/api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'med-assist';
  authorized: boolean;

  constructor(private apiService: ApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.apiService.authorized.subscribe(value => {
      this.authorized = value;
      if (!this.authorized) {
        this.router.navigate(['/']);
      } else
        this.router.navigate(['/home'])
    });
  }
}

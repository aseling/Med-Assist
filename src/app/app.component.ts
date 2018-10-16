<<<<<<< HEAD
import { MainBodyService } from './services/main-body.service';
import { SideNavService } from './services/side-nav.service';
import { Component } from '@angular/core';
import { TopNavService } from './services/top-nav.service';
=======
import {Component} from '@angular/core';
import {ApiService} from "./services/api.service";
import { Router } from '@angular/router';
>>>>>>> master

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'med-assist';

<<<<<<< HEAD
  showNavBar: boolean;

  constructor(private sideNavService: SideNavService, private topNavService: TopNavService,
    private mainBodyService: MainBodyService) {
      sideNavService.show();
      topNavService.show();
      mainBodyService.show();
    }
=======
  authorized:boolean;
  registerViewOpen:boolean;

  constructor(private apiService:ApiService, private router: Router) {
    this.apiService.authorized.subscribe(value => {
      this.authorized = value;
      if(!this.authorized) {
        this.router.navigate(['/']);
      }
    });

    this.apiService.registerView.subscribe(value => {
      this.registerViewOpen = value;
    });
  }
>>>>>>> master
}

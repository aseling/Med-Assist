import { SideNavService } from './../side-nav-bar/side-nav.service';
import { Component, OnInit } from '@angular/core';
import { TopNavService } from '../top-nav/top-nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(sideNavService: SideNavService, topNavService: TopNavService) {
    sideNavService.show();
    topNavService.show();
   }

  ngOnInit() {

  }
}

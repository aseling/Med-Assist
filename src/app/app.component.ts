import { SideNavService } from './side-nav-bar/side-nav.service';
import { Component } from '@angular/core';
import { TopNavService } from './top-nav/top-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'med-assist';

  sideNavService = new SideNavService;
  topNavService = new TopNavService;

  showNavBar: boolean;

  constructor() {
    this.sideNavService.show();
    this.topNavService.show();
  }
}

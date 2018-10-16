import { MainBodyService } from './services/main-body.service';
import { SideNavService } from './services/side-nav.service';
import { Component } from '@angular/core';
import { TopNavService } from './services/top-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'med-assist';

  showNavBar: boolean;

  constructor(private sideNavService: SideNavService, private topNavService: TopNavService,
    private mainBodyService: MainBodyService) {
      sideNavService.show();
      topNavService.show();
      mainBodyService.show();
    }
}

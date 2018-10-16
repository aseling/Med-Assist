import {Component} from '@angular/core';
import {ApiService} from "./services/api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'med-assist';

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
}

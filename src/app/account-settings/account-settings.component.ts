import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(private apiService:ApiService) {
  }

  ngOnInit() {
    this.apiService.imagePath.subscribe(path => {
      if (path === 'no image') {
        this.imagePath = './assets/img/default-user.png';
      } else {
        this.imagePath = path;
      }
    });
  }

}

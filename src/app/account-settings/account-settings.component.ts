import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  imagePath = './assets/img/default-user.png';
  selectedFile: File = null;
  user:string;
  email: string;

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

    this.apiService.email.subscribe(email => {
      this.email = email;
    }
  );

    this.apiService.user.subscribe(user => {
      this.user = user;
    });
    console.log(this.email);
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile === null) {
      console.log("No file selected");
    } else {
      this.apiService.addUserImage(this.selectedFile, this.user);
    }
  }
}

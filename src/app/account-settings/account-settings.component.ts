import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import anime from 'animejs'

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  imagePath = './assets/img/default-user.png';
  selectedFile:File = null;
  user:string;
  email:string;
  imagePanelOpen:boolean;
  passwordPanelOpen:boolean;
  uploadForm:FormGroup;
  oldPassword;
  newPassword;
  confirmPassword;

  constructor(private apiService:ApiService,
              private formBuilder:FormBuilder) {
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
    });

    this.apiService.user.subscribe(user => {
      this.user = user;
    });

    this.apiService.changePassword.subscribe(message => {
      console.log(message);
      if(message == "Success") {
        
      } else {
        
      }
    });


    this.uploadForm = this.formBuilder.group({
      'oldPassword': new FormControl('', [Validators.required]),
      'newPassword': new FormControl('', [Validators.required]),
      'confirmPassword': new FormControl('', [Validators.required])
    });
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  changePassword() {
    this.oldPassword = this.uploadForm.controls.oldPassword.value;
    this.newPassword = this.uploadForm.controls.newPassword.value;
    this.confirmPassword = this.uploadForm.controls.confirmPassword.value;

    // stop here if form is invalid
    if (this.uploadForm.invalid) {
      if (this.uploadForm.controls.oldPassword.errors != null) {
        var error = anime({
          targets: '#oldPassword .errors',
          translateX: [
            {value: 5, duration: 50, elasticity: 100},
            {value: -5, duration: 50, elasticity: 100},
            {value: 0, duration: 50, elasticity: 100}
          ],
          loop: 2
        });
      }

      if (this.uploadForm.controls.newPassword.errors != null) {
        var error = anime({
          targets: '#newPassword .errors',
          translateX: [
            {value: 5, duration: 50, elasticity: 100},
            {value: -5, duration: 50, elasticity: 100},
            {value: 0, duration: 50, elasticity: 100}
          ],
          loop: 2
        });
      }

      if (this.uploadForm.controls.confirmPassword.errors != null) {
        var error = anime({
          targets: '#confirmPassword .errors',
          translateX: [
            {value: 5, duration: 50, elasticity: 100},
            {value: -5, duration: 50, elasticity: 100},
            {value: 0, duration: 50, elasticity: 100}
          ],
          loop: 2
        });
      }
      return;
    }

    console.log(this.oldPassword, this.newPassword, this.confirmPassword);

    // this.apiService.checkCorrectPassword(this.user, this.oldPassword);
    console.log(this.apiService.checkCorrectPassword(this.user, this.oldPassword));
  }

  updateProfileImage() {
    if (this.selectedFile === null) {
      console.log("No file selected");
    } else {
      this.apiService.addUserImage(this.selectedFile, this.user);
      this.openImagePanelOpenToggle();
    }
  }

  openImagePanelOpenToggle() {
    this.imagePanelOpen = !this.imagePanelOpen;
  }

  openPasswordPanelOpenToggle() {
    this.passwordPanelOpen = !this.passwordPanelOpen;
  }
}

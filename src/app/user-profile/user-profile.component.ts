import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileEdit = false;
  username = 'test';

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  editProfile() {
    this.profileEdit = true;
  }

  updateProfile() {
    this.profileEdit = false;
  }

  cancelProfile() {
    this.profileEdit = false;
  }


  openSnackBar() {
    let message = "Update Successful";
    this.snackBar.open(message, "" ,{
      duration: 2000
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-medical-profile',
  templateUrl: './medical-profile.component.html',
  styleUrls: ['./medical-profile.component.css']
})
export class MedicalProfileComponent implements OnInit {
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

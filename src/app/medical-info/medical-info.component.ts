import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-medical-info',
  templateUrl: './medical-info.component.html',
  styleUrls: ['./medical-info.component.css']
})
export class MedicalInfoComponent implements OnInit {
  medicalProfileEdit = false;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

 editMedicalProfile() {
    this.medicalProfileEdit = true;
  }

  updateMedicalProfile() {
    this.medicalProfileEdit = false;
  }

  cancelMedicalProfile() {
    this.medicalProfileEdit = false;
  }


  openSnackBar() {
    let message = "Update Successful";
    this.snackBar.open(message, "" ,{
      duration: 2000
    });
  }
}

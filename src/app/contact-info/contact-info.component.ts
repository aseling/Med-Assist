import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  patientProfileEdit = false;
  phoneProfileEdit = false;
  username = 'test';
  address = 'string';
  DOB = 'string';
  sex = 'string';
  maritalStatus = 'string';
  language = 'string';
  race = 'string';
  ethnicity = 'string';
  homePhone = 'number';
  workPhone = 'number';
  mobilePhone = 'number';
  email = 'email';
  emergencyName = 'string';
  emergencyRelationship = 'string';
  emergencyHomePhone = 'string';
  emergencyMobilePhone = 'string';
  emergencyWorkPhone = 'string';




  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  editPatientProfile() {
    this.patientProfileEdit = true;
  }

  updatePatientProfile() {
    this.patientProfileEdit = false;
  }

  cancelPatientProfile() {
    this.patientProfileEdit = false;
  }

 editPhoneProfile() {
    this.patientProfileEdit = true;
  }

  updatePhoneProfile() {
    this.patientProfileEdit = false;
  }

  cancelPhoneProfile() {
    this.patientProfileEdit = false;
  }

  openSnackBar() {
    let message = "Update Successful";
    this.snackBar.open(message, "" ,{
      duration: 2000
    });
  }
}

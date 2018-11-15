import{Component, OnInit}from '@angular/core';
import {MatSnackBar}from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  patientProfileEdit = false;
  phoneProfileEdit = false;
  emergencyProfileEdit = false;
  patientFirstName: [''],
  patientLasttName:string= '';
  address:string= '';
  DOB:string = '';
  sex:string = '';
  maritalStatus:string = '';
  language:string = '';
  race:string = '';
  ethnicity:string = '';
  homePhone:string = '';
  workPhone:string = '';
  mobilePhone:string = '';
  email:string = '';
  emergencyFirstName:string='';
  emergencyLastName:string ='';
  emergencyRelationship:string = '';
  emergencyHomePhone:string = '';
  emergencyMobilePhone:string = '';
  emergencyWorkPhone:string = '';


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
    this.phoneProfileEdit = true;
 }

  updatePhoneProfile() {
    this.phoneProfileEdit = false;
  }

  cancelPhoneProfile() {
    this.phoneProfileEdit = false;
  }


 editEmergencyProfile() {
    this.emergencyProfileEdit = true;
 }

  updateEmergencyProfile() {
    this.emergencyProfileEdit = false;
  }

  cancelEmergencyProfile() {
    this.emergencyProfileEdit = false;
  }

  openSnackBar() {
    let message = "Update Successful";
    this.snackBar.open(message, "" ,{
      duration: 2000
    });
  }
}


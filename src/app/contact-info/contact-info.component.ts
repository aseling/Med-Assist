import{Component, OnInit}from '@angular/core';
import {MatSnackBar}from '@angular/material';
import {FormBuilder}from '@angular/forms';
import {Validators }from '@angular/forms';
import {FormArray}from '@angular/forms';
import {ApiService}from "../services/api.service";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})

export class ContactInfoComponent implements OnInit {

userInformation;
  patientProfileEdit;
  emergencyProfileEdit;
  phoneProfileEdit;
  user;
  patientFirstName= "";
  patientLastName= "";
  address= "";
  DOB= "";
  sex="";
  maritalStatus= "";
  language= "";
  race= "";
  ethnicity= "";
  homePhone="";
  mobilePhone="";
  workPhone="";
  email="";
  emergencyFirstName="";
  emergencyLastName="";
  emergencyRelationship="";
  emergencyHomePhone="";
  emergencyMobilePhone="";
  emergencyWorkPhone="";


constructor(private snackBar: MatSnackBar, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.user.subscribe(user => {
      this.user = user;
      this.apiService.getUserBasicInfo(this.user);
    });

this.apiService.userBasicInfo.subscribe(info => {
this.userInformation = info;
  this.patientFirstName = this.userInformation.basicInfo[0].patientFirstName;
  this.patientLastName= this.userInformation.basicInfo[0].patientLastName;
  this.address= this.userInformation.basicInfo[0].address;
  this.DOB = this.userInformation.basicInfo[0].DOB;
  this.sex = this.userInformation.basicInfo[0].sex;
  this.maritalStatus = this.userInformation.basicInfo[0].maritalStatus;
  this.language = this.userInformation.basicInfo[0].language;
  this.race = this.userInformation.basicInfo[0].race;
  this.ethnicity = this.userInformation.basicInfo[0].ethnicity;
  this.homePhone = this.userInformation.basicInfo[0].homePhone;
  this.mobilePhone = this.userInformation.basicInfo[0].mobilePhone;
  this.email = this.userInformation.basicInfo[0].email;
  this.emergencyFirstName = this.userInformation.basicInfo[0].emergencyFirstName;
  this.emergencyLastName = this.userInformation.basicInfo[0].emergencyLastName;
  this.emergencyRelationship = this.userInformation.basicInfo[0].emergencyRelationship;
  this.emergencyHomePhone = this.userInformation.basicInfo[0].emergencyHomePhone
  this.emergencyMobilePhone = this.userInformation.basicInfo[0].emergencyMobilePhone;
  this.emergencyWorkPhone = this.userInformation.basicInfo[0].emergencyWorkPhone;
    });
  }


  editPatientProfile() {
    this.patientProfileEdit = true;
  };

  updatePatientProfile() {
    this.patientProfileEdit = false;
  };

  cancelPatientProfile() {
    this.patientProfileEdit = false;
  };

 editPhoneProfile() {
    this.phoneProfileEdit = true;
 };

  updatePhoneProfile() {
    this.phoneProfileEdit = false;
  };

  cancelPhoneProfile() {
    this.phoneProfileEdit = false;
  };

 editEmergencyProfile() {
    this.emergencyProfileEdit = true;
 };

  updateEmergencyProfile() {
    this.emergencyProfileEdit = false;
  };

  cancelEmergencyProfile() {
    this.emergencyProfileEdit = false;
  };

  openSnackBar() {
    let message = "Update Successful";
    this.snackBar.open(message, "" ,{
      duration: 2000
    });
  };
}


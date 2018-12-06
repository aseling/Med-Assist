import{Component, OnInit}from '@angular/core';
import {MatSnackBar}from '@angular/material';
import {ApiService}from "../services/api.service";
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';


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
  basicInfoForm:FormGroup;

  patientFirstName = "";
  patientLastName = "";
  address = "";
  DOB = "";
  sex = "";
  maritalStatus = "";
  language = "";
  race = "";
  ethnicity = "";

  homePhone = "";
  mobilePhone = "";
  workPhone = "";

  emergencyFirstName = "";
  emergencyLastName = "";
  emergencyRelationship = "";
  emergencyHomePhone = "";
  emergencyMobilePhone = "";
  emergencyWorkPhone = "";


  constructor(private snackBar:MatSnackBar,
              private apiService:ApiService,
              private formBuilder:FormBuilder) {
  }

  ngOnInit() {
    this.basicInfoForm = this.formBuilder.group({
      'patientFirstName': new FormControl(''),
      'patientLastName': new FormControl(''),
      'address': new FormControl(''),
      'DOB': new FormControl(''),
      'sex': new FormControl(''),
      'maritalStatus': new FormControl(''),
      'language': new FormControl(''),
      'race': new FormControl(''),
      'ethnicity': new FormControl('')
    });

    this.apiService.user.subscribe(user => {
      this.user = user;
      this.apiService.getUserBasicInfo(this.user);
    });

    this.apiService.userBasicInfo.subscribe(info => {
      this.userInformation = info;
      if (this.userInformation.basicInfo.length > 0) {
        this.patientFirstName = this.userInformation.basicInfo[0].patientFirstName;
        this.patientLastName = this.userInformation.basicInfo[0].patientLastName;
        this.address = this.userInformation.basicInfo[0].address;
        this.DOB = this.userInformation.basicInfo[0].DOB;
        this.sex = this.userInformation.basicInfo[0].sex;
        this.maritalStatus = this.userInformation.basicInfo[0].maritalStatus;
        this.language = this.userInformation.basicInfo[0].language;
        this.race = this.userInformation.basicInfo[0].race;
        this.ethnicity = this.userInformation.basicInfo[0].ethnicity;
      }

      if (this.userInformation.phoneEmail > 0) {
        this.homePhone = this.userInformation.phoneEmail[0].homePhone;
        this.mobilePhone = this.userInformation.phoneEmail[0].mobilePhone;
        this.workPhone = this.userInformation.phoneEmail[0].workPhone;
      }

      if (this.userInformation.emergencyContact > 0) {
        this.emergencyFirstName = this.userInformation.emergencyContact[0].emergencyFirstName;
        this.emergencyLastName = this.userInformation.emergencyContact[0].emergencyLastName;
        this.emergencyRelationship = this.userInformation.emergencyContact[0].emergencyRelationship;
        this.emergencyHomePhone = this.userInformation.emergencyContact[0].emergencyHomePhone;
        this.emergencyMobilePhone = this.userInformation.emergencyContact[0].emergencyMobilePhone;
        this.emergencyWorkPhone = this.userInformation.emergencyContact[0].emergencyWorkPhone;
      }
    });
  }


  editPatientProfile() {
    this.patientProfileEdit = true;
  };

  updatePatientProfile() {
    this.patientProfileEdit = false;
    this.apiService.updateBasicInfo(
      this.patientFirstName, this.patientLastName,
      this.address, this.DOB,
      this.sex, this.maritalStatus,
      this.language, this.race, this.ethnicity, this.user);
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
    this.snackBar.open(message, "", {
      duration: 2000
    });
  };
}


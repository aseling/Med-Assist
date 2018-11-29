import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.css']
})
export class BillingInfoComponent implements OnInit {
  billingProfileEdit = false;
  insuranceProfileEdit = false;
  billFirstName="";
  billLastName="";
  billingAddress="";
  billingPhone="";
  billingEmail="";
  insuranceType="";
  insuranceInfo="";
  insurancePay="";
  primaryHolderName="";
  insurerRelationship="";
  insuranceDOB="";
  policyNumber="";
  idNumber="";
  issueNumber="";
  insuranceExpiration="";

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  editBillingProfile() {
    this.billingProfileEdit = true;
  }

  updateBillingProfile() {
    this.billingProfileEdit = false;
  }

  cancelBillingProfile() {
    this.billingProfileEdit = false;
  }

 editInsuranceProfile() {
    this.insuranceProfileEdit = true;
  }

  updateInsuranceProfile() {
    this.insuranceProfileEdit = false;
  }

  cancelInsuranceProfile() {
    this.insuranceProfileEdit = false;
  }

  openSnackBar() {
    let message = "Update Successful";
    this.snackBar.open(message, "" ,{
      duration: 2000
    });
  }
}

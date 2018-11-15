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
  billFirstName:string='';
  billLastName:string='';
  billingAddress:string='';
  billingPhone:string='';
  billingEmail:string='';
  insuranceType:string='';
  insuranceInfo:string='';
  insurancePay:string='';
  primaryHolderName:string='';
  insurerRelationship:string='';
  insuranceDOB:string='';
  policyNumber:string='';
  idNumber:string='';
  issueNumber:string='';
  insuranceExpiration:string='';

  constructor(public snackBar: MatSnackBar) { }

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

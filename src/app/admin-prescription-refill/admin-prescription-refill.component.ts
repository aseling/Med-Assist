import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-admin-prescription-refill',
  templateUrl: './admin-prescription-refill.component.html',
  styleUrls: ['./admin-prescription-refill.component.css']
})
export class AdminPrescriptionRefillComponent implements OnInit {
  user:string;
  userMeds = [];
  test;

  constructor(private apiService:ApiService) {
  }

  ngOnInit() {
    this.apiService.userPrescriptions.subscribe(info => {
      this.test = info;
      if(this.test != "") {
        console.log(this.test.message.prescriptions);
        this.userMeds = this.test.message.prescriptions;
      }
    });

    this.apiService.user.subscribe(user => {
      this.user = user;
    });
    this.getMedInfo();

  }

  getMedInfo() {
    this.apiService.getUserInfo(this.user);
  }

}

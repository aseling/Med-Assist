import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';


@Component({
  selector: 'app-prescription-refill',
  templateUrl: './prescription-refill.component.html',
  styleUrls: ['./prescription-refill.component.css']
})
export class PrescriptionRefillComponent implements OnInit {
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

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
      this.userMeds = [];
      this.test = info;
      if (this.test != "") {

        this.test.message.prescriptions.map(data => {
          if(data.drugName != "ignore") {
            this.userMeds.push(data);
          }
        });
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

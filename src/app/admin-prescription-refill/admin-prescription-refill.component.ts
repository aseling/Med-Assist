import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-prescription-refill',
  templateUrl: './admin-prescription-refill.component.html',
  styleUrls: ['./admin-prescription-refill.component.css']
})
export class AdminPrescriptionRefillComponent implements OnInit {
  user:string;
  userMeds = [];
  test;
  _id;
  username;

  constructor(private apiService:ApiService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.params['_id'];

    this.apiService.usernameForAdminChat.subscribe(name => {
      this.username = name;
      console.log(this.username, "USER!!!");
      this.apiService.getUserInfo(this.username);
    });

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

import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../services/api.service';


@Component({
  selector: 'app-prescription-refill',
  templateUrl: './prescription-refill.component.html',
  styleUrls: ['./prescription-refill.component.css']
})
export class PrescriptionRefillComponent implements OnInit {
  user: string;
  userMeds = [
    {
      drugName: 'Clobetasol 0.05% Sol',
      numberRefills: 3,
      expireDate: '12/11/2018'
    },
    {
      drugName: 'Levonor/ethi Estadiol Tab',
      numberRefills: 6,
      expireDate: '04/29/2019'
    },
    {
      drugName: 'Minocycline 100mg Cap',
      numberRefills: 4,
      expireDate: '07/07/2019'
    }
  ];

  constructor(private http: HttpClient, private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.user.subscribe(user => {
      this.user = user;
    });
    this.getMedInfo();

  }

  getMedInfo() {
    this.apiService.getUserInfo(this.user);
  }

}

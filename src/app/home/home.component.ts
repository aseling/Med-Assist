import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAdmin;
  announcementList = [
    {
      date: "12/20/18",
      announcement: "Office Remodeling"
    },
    {
      date: "12/25/18",
      announcement: "Office Closed. Merry Christmas"
    },
    {
      date: "01/15/19",
      announcement: "Patient Appreciation Week"
    },
    {
      date: "01/28/19",
      announcement: "Office Closed"
    },
    {
      date: "02/18/19",
      announcement: "Happy Birthday Dr. Phil"
    }
  ];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.permissions.subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
  }
}

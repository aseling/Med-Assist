import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

export interface IReport {
  reportName: string;
  reportDate: string;
  reportLink: string;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {

  reports = null;
  clickedUrl = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.reports.subscribe(list => {
      this.reports = list;
    });
  }

  changeUrl(index) {
    this.clickedUrl = this.reports[index].pdfUrl;
  }
}

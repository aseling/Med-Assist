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

  reports = [
    {
      reportName: "Blood Work",
      reportDate: "1/1/11",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "MRI",
      reportDate: "2/2/12",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "Scoliosis Screening",
      reportDate: "3/3/13",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "Chest X-Ray",
      reportDate: "1/1/11",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "Back X-Ray",
      reportDate: "2/2/12",
      reportLink: "BarGraph.pdf",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
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
      reportName: "report1",
      reportDate: "1/1/11",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report2",
      reportDate: "2/2/12",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report3",
      reportDate: "3/3/13",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report1",
      reportDate: "1/1/11",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report2",
      reportDate: "2/2/12",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report3",
      reportDate: "3/3/13",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report1",
      reportDate: "1/1/11",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report2",
      reportDate: "2/2/12",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report3",
      reportDate: "3/3/13",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report1",
      reportDate: "1/1/11",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report2",
      reportDate: "2/2/12",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report3",
      reportDate: "3/3/13",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report1",
      reportDate: "1/1/11",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report2",
      reportDate: "2/2/12",
      reportLink: "BarGraph.pdf",
    },
    {
      reportName: "report3",
      reportDate: "3/3/13",
      reportLink: "BarGraph.pdf",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
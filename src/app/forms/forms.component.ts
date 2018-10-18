import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  formsList = [
    {
      formName: "New Patient Form",
      formDate: "1/1/11",
      formLink: "BarGraph.pdf",
    },
    {
      formName: "Medical Background Form",
      formDate: "2/2/12",
      formLink: "BarGraph.pdf",
    },
    {
      formName: "Medical Release Form",
      formDate: "3/3/13",
      formLink: "BarGraph.pdf",
    },
    {
      formName: "Change of Insurance Form",
      formDate: "1/1/11",
      formLink: "BarGraph.pdf",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

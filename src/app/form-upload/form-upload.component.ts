import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  forms = [
    {
      formName: "New Patient Forms",
      formDescription: "All the forms you will need to fill out before your first appointment with your doctor.",
      formLink: "",
    },
    {
      formName: "Health Information Release Authorization",
      formDescription: "Fill this out if you would like us to release health information to a company or individual.",
      formLink: "",
    },
    {
      formName: "Health History Update Form",
      formDescription: "Fill this out if there have been developments in yoru health since the last time we saw you.",
      formLink: "",
    },
    {
      formName: "Patient Information Update Form",
      formDescription: "Fill this out if your contact or other personal information has changed.",
      formLink: "",
    },
    {
      formName: "Patient Feedback Form",
      formDescription: "Let us know how we're doing.",
      formLink: "",
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

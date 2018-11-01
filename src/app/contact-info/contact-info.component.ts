import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  contactEdit = false;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  editContact() {
    this.contactEdit = true;
  }

  updateContact() {
    this.contactEdit = false;
  }

  cancelContact() {
    this.contactEdit = false;
  }


  openSnackBar() {
    let message = "Update Successful";
    this.snackBar.open(message, "" ,{
      duration: 2000
    });
  }
}

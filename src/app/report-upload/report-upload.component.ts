import {User} from './../generic.interface';
import {ApiService} from './../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import anime from 'animejs'
import {Subscription} from "rxjs/index";


@Component({
  selector: 'app-report-upload',
  templateUrl: './report-upload.component.html',
  styleUrls: ['./report-upload.component.css']
})
export class ReportUploadComponent implements OnInit {
  user:User;
  _id:string;
  selectedFile:File = null;
  userReports:any[];
  pdfNameInput:string;
  pdfDescInput:string;
  uploadForm:FormGroup;
  open:boolean;
  username;
  onReceiveNewPdf:Subscription;

  constructor(private apiService:ApiService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private formBuilder:FormBuilder) {
  }

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.params['_id'];
    this.updateUserInfo();

    this.uploadForm = this.formBuilder.group({
      'pdfNameInput': new FormControl('', [Validators.required]),
      'pdfDescInput': new FormControl('', [Validators.required])
    });

    this.onReceiveNewPdf = this.apiService.reports.subscribe(reports => {
      this.userReports = [];
      this.userReports = reports;
    });
  }

  ngOnDestroy() {
    this.onReceiveNewPdf.unsubscribe();
  }

  updateUserInfo() {
    this.userReports = [];
    this.apiService.getAllUsers();
    this.apiService.usersList.subscribe(list => {
      this.user = list.find((item) => {
        return item._id === this._id;
      })
    });
    this.username = this.user.username;

    this.apiService.getUserReports(this.username);
    // this.userReports = this.user.pdfReport;
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    this.pdfNameInput = this.uploadForm.controls.pdfNameInput.value;
    this.pdfDescInput = this.uploadForm.controls.pdfDescInput.value;

    // stop here if form is invalid
    if (this.uploadForm.invalid) {
      if (this.uploadForm.controls.pdfNameInput.errors != null) {
        var error = anime({
          targets: '#nameError .errors',
          translateX: [
            {value: 5, duration: 50, elasticity: 100},
            {value: -5, duration: 50, elasticity: 100},
            {value: 0, duration: 50, elasticity: 100}
          ],
          loop: 2
        });
      }

      if (this.uploadForm.controls.pdfDescInput.errors != null) {
        var error = anime({
          targets: '#descriptionError .errors',
          translateX: [
            {value: 5, duration: 50, elasticity: 100},
            {value: -5, duration: 50, elasticity: 100},
            {value: 0, duration: 50, elasticity: 100}
          ],
          loop: 2
        });
      }
      return;
    } else if (this.selectedFile === null) {
      var error = anime({
        targets: '#fileError .errors',
        translateX: [
          {value: 5, duration: 50, elasticity: 100},
          {value: -5, duration: 50, elasticity: 100},
          {value: 0, duration: 50, elasticity: 100}
        ],
        loop: 2
      });
      return;
    }

    // this.userReports = [];
    this.apiService.addUserReport(this.pdfNameInput, this.pdfDescInput, this.selectedFile, this.user.username);
    this.open = false;
    this.apiService.getUserReports(this.username);
  }

  openToggle() {
    this.open = !this.open;
  }
}

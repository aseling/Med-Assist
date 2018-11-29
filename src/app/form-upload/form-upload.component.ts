import { Subscription } from 'rxjs/index';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from './../generic.interface';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import anime from 'animejs'

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFile: File = null;
  forms: any[];
  pdfNameInput: string;
  pdfDescInput: string;
  uploadForm: FormGroup;
  open: boolean;
  onReceiveNewPdf: Subscription;

  constructor(private apiService:ApiService, private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.apiService.forms.subscribe(forms => {
      return this.forms = forms;
    })

    this.uploadForm = this.formBuilder.group({
      'pdfNameInput': new FormControl('', [Validators.required]),
      'pdfDescInput': new FormControl('', [Validators.required])
    });

    this.onReceiveNewPdf = this.apiService.forms.subscribe(forms => {
      this.forms = [];
      this.forms = forms;
    });
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    this.pdfNameInput = this.uploadForm.controls.pdfNameInput.value;
    this.pdfDescInput = this.uploadForm.controls.pdfDescInput.value;

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

    this.apiService.addUserReport(this.pdfNameInput, this.pdfDescInput, this.selectedFile, "root");
    this.open = false;
    this.apiService.getForms();
  }

  openToggle() {
    this.open = !this.open;
  }
}

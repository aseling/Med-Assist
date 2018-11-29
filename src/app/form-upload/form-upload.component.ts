import { User } from './../generic.interface';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
  user: User;
  pdfNameInput: string;
  pdfDescInput: string;
  forms: any[];
  selectedFile: File = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllUsers();
    this.apiService.usersList.subscribe(list => {
      this.user = list.find((item) => {
        return item.username === "root";
      })
    });
    this.forms = this.user.pdfReport;
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile === null) {
      console.log("No file selected");
    } else {
      this.apiService.addUserReport(this.selectedFile, this.pdfNameInput, this.user.username, 
        this.pdfDescInput);
    }
  }
}

import { User } from './../generic.interface';
import { ApiService } from './../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-upload',
  templateUrl: './report-upload.component.html',
  styleUrls: ['./report-upload.component.css']
})
export class ReportUploadComponent implements OnInit {
  user: User;
  _id: string;
  selectedFile: File = null;
  userReports: any[];
  pdfNameInput: string;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.params['_id']
    this.updateUserInfo();
    console.log(this.userReports);
  }

  updateUserInfo() {
    this.apiService.getAllUsers();
    this.apiService.usersList.subscribe(list => {
      this.user = list.find((item) => {
        return item._id === this._id;
      })
    });
    this.userReports = this.user.pdfReport;
  }

  onClick(event: string) {
    if (event === "View List") {
      this.router.navigate(["users-list"])
    } else if (event === "View User") {
      this.router.navigate(["users-list", this._id])
    }
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile === null) {
      console.log("No file selected");
    } else {
      this.apiService.addUserReport(this.selectedFile, this.pdfNameInput, this.user.username);
    }
    this.updateUserInfo();
  }
}

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

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.params['_id']
    this.apiService.usersList.subscribe(list => {
      this.user = list.find((item) => {
        return item._id === this._id;
      })
    });
  }

  onClick(event: string) {
    if (event === "View List") {
      this.router.navigate(["users-list"])
    } else if (event === "View User") {
      this.router.navigate(["users-list", this._id])
    }
  }
}

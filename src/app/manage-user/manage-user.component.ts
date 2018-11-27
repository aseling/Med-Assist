import { ApiService } from './../services/api.service';
import { User } from './../generic.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  user: User;
  _id;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.params['_id'];
    this.apiService.usersList.subscribe(list => {
      this.user = list.find((item) => {
        return item._id === this._id;
      })
    });
  }

  onClick(event: string) {
    if(event === "reports") {
      this.router.navigate(["users-list/", this.user._id, "upload-reports"])
    } else if (event === "View List") {
      this.router.navigate(["users-list"])
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  _id: string;
  name: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.params['_id'];
    this.name = this.activatedRoute.snapshot.params['name'];
  }
}

import { SideNavService } from '../services/side-nav.service';
import { Component, OnInit } from '@angular/core';
import { TopNavService } from '../services/top-nav.service';
import { container } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}

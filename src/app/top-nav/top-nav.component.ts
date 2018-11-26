import {Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent implements OnInit {
  authorized:boolean = false;
  user:string;
  imagePath = './assets/img/default-user.png';
  sideNavVisible = false;
  changeView;
  isAdmin;

  constructor(private apiService:ApiService, private router:Router) {
  }

  ngOnInit() {
    this.apiService.authorized.subscribe(value => {
      this.authorized = value;
    });

    this.apiService.user.subscribe(user => {
      this.user = user;
    });

    this.apiService.imagePath.subscribe(path => {
      if (path === 'no image') {
        this.imagePath = './assets/img/default-user.png';
      } else {
        this.imagePath = path;
      }
    });

    this.apiService.permissions.subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    })

    this.changeView = window.innerWidth <= 1000;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.changeView = event.target.innerWidth <= 1000;
  }

  logout() {
    this.apiService.unauthorizeUser();
    this.apiService.setImagePath('./assets/img/default-user.png');
  }

  showSlideOutNav() {
    this.sideNavVisible = !this.sideNavVisible;
  }
}

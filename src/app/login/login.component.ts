import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  username:string = '';
  password:string = '';
  submitted = false;
  registerViewOpen:boolean;

  constructor(private apiService:ApiService, private formBuilder:FormBuilder,private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });

    this.apiService.registerView.subscribe(value => {
      this.registerViewOpen = value;
    });
  }

  login() {
    this.submitted = true;
    this.username = this.loginForm.controls.username.value;
    this.password = this.loginForm.controls.password.value;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.apiService.authorizeUser();
    this.router.navigate(['/home']);
  };

  openRegisterView() {
    this.apiService.openRegisterPage();
  }
}

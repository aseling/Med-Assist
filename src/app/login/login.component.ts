import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import anime from 'animejs'

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
  loginMessage = '';
  failAlert = false;
  loading = false;

  constructor(private apiService:ApiService,
              private formBuilder:FormBuilder,
              private router:Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });

    this.apiService.registerView.subscribe(value => {
      this.registerViewOpen = value;
    });

    this.apiService.loginMessage.subscribe(message => {
      this.loginMessage = message;

      if (this.loginMessage === 'Success') {
        this.apiService.authorizeUser();
        this.apiService.setUserName(this.username);
        this.apiService.getUserImage(this.username);
        this.apiService.getUserEmail(this.username);
        this.apiService.getUserBasicInfo(this.username);
        this.apiService.getUserReports(this.username);
        this.apiService.getForms();
        this.apiService.getAllUsers();
      }

      if (this.loginMessage === 'Authentication failed. User not found' || this.loginMessage === 'Invalid password') {
        this.failAlert = true;
        this.loading = false;
        setTimeout(() => {
          this.failAlert = false;
        }, 5000);
      }
    });
  }

  login() {
    this.submitted = true;
    this.username = this.loginForm.controls.username.value;
    this.password = this.loginForm.controls.password.value;
    this.failAlert = false;

    // stop here if form is invalid
    if (this.loginForm.invalid) {

      if(this.loginForm.controls.username.errors != null) {
        var error = anime({
          targets: '#userError .errors',
          translateX: [
            {value: 5, duration: 50, elasticity: 100},
            {value: -5, duration: 50, elasticity: 100},
            {value: 0, duration: 50, elasticity: 100}
          ],
          loop: 2
        });
      }

      if(this.loginForm.controls.password.errors != null) {
        var error = anime({
          targets: '#passwordError .errors',
          translateX: [
            {value: 5, duration: 50, elasticity: 100},
            {value: -5, duration: 50, elasticity: 100},
            {value: 0, duration: 50, elasticity: 100}
          ],
          loop: 2
        });
      }
      return;
    }

    this.loading = true;
    this.apiService.login(this.username, this.password);
    this.apiService.getUserPermissions(this.username);
  };

  openRegisterView() {
    this.apiService.openRegisterPage(true);
    this.router.navigate(['/register']);
    this.apiService.setRegisterMessage('');
  }

  reset() {
    this.submitted = false;
  }

}

import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {Router} from '@angular/router';
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
  loginMessage = '';
  failAlert = false;
  hide = true;
  loading = false;

  constructor(private apiService:ApiService, private formBuilder:FormBuilder, private router:Router) {
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
        this.failAlert = false;
      }

      if(this.loginMessage === 'Authentication failed. User not found'){
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

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.apiService.login(this.username, this.password);
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

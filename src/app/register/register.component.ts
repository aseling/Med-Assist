import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import{User} from "../models/user"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  name:string = '';
  email:string = '';
  username:string = '';
  password:string = '';
  password2:string = '';
  submitted = false;
  userTaken = false;
  passwordMatch = false;
  registerViewOpen:boolean;
  registerMessage = '';

  constructor(private apiService:ApiService, private formBuilder:FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'password2': new FormControl('', [Validators.required]),
    });

    this.apiService.registerView.subscribe(value => {
      this.registerViewOpen = value;
    });

    this.apiService.registerMessage.subscribe(message => {
      this.registerMessage = message;
      if (this.registerMessage == 'User info was saved.') {
        this.cancel();
        this.userTaken = false;
        this.registerForm.reset();
        this.submitted = false;
      } else {
        this.userTaken = true;
      }
      this.registerMessage = '';
    });
  }

  registerSubmit() {
    this.submitted = true;
    this.name = this.registerForm.controls.name.value;
    this.email = this.registerForm.controls.email.value;
    this.username = this.registerForm.controls.username.value;
    this.password = this.registerForm.controls.password.value;
    this.password2 = this.registerForm.controls.password2.value;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    if (this.password != this.password2) {
      console.log("NO MATCH");
      return;
    }

    this.apiService.register(this.name, this.email, this.username, this.password, this.password2);
    this.passwordMatch = true;
  }

  cancel() {
    this.apiService.openRegisterPage(false);
  }
}

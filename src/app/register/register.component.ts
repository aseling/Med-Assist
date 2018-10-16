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
  passwordMatch = false;
  registerViewOpen:boolean;

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
      console.log(this.registerForm.invalid);
      console.log(this.registerForm.controls.password);
      console.log(this.name, this.email, this.username, this.password, this.password2);
      return;
    }

    if (this.password != this.password2) {
      console.log("NO MATCH");
      return;
    }

    this.apiService.closeRegisterPage();

    this.passwordMatch = true;
  }

  cancel() {
    this.apiService.closeRegisterPage();
  }
}

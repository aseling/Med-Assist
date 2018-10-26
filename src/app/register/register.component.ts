import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Router} from "@angular/router";
import {AbstractControl} from '@angular/forms';
import anime from 'animejs'

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
  // passwordMatch: boolean = false;
  registerViewOpen:boolean;
  registerMessage = '';

  constructor(private apiService:ApiService, private formBuilder:FormBuilder, private router:Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'password2': new FormControl('', [Validators.required]),
    }, {
      validator: PasswordValidation.MatchPassword
    });

    this.apiService.registerView.subscribe(value => {
      this.registerViewOpen = value;
    });

    this.apiService.registerMessage.subscribe(message => {
      this.registerMessage = message;
      if (this.registerMessage == 'User info was saved.') {
        console.log("SAVED");
        this.cancel();
        this.userTaken = false;
        this.registerForm.reset();
        this.submitted = false;
      } else {
        this.userTaken = true;
      }
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
      if(this.registerForm.controls.name.errors != null) {
        var error = anime({
          targets: '#nameError .errors',
          translateX: [
            {value: 5, duration: 50, elasticity: 100},
            {value: -5, duration: 50, elasticity: 100},
            {value: 0, duration: 50, elasticity: 100}
          ],
          loop: 2
        });
      }

      if(this.registerForm.controls.email.errors != null) {
        var error = anime({
          targets: '#emailError .errors',
          translateX: [
            {value: 5, duration: 50, elasticity: 100},
            {value: -5, duration: 50, elasticity: 100},
            {value: 0, duration: 50, elasticity: 100}
          ],
          loop: 2
        });
      }

      if(this.registerForm.controls.username.errors != null) {
        var error = anime({
          targets: '#usernameError .errors',
          translateX: [
            {value: 5, duration: 50, elasticity: 100},
            {value: -5, duration: 50, elasticity: 100},
            {value: 0, duration: 50, elasticity: 100}
          ],
          loop: 2
        });
      }

      if(this.registerForm.controls.password.errors != null) {
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

      if(this.registerForm.controls.password2.errors != null) {
        var error = anime({
          targets: '#password2Error .errors',
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

    this.apiService.register(this.name, this.email, this.username, this.password, this.password2);
  }

  cancel() {
    this.apiService.openRegisterPage(false);
    this.router.navigate(['login']);
    this.registerForm.reset();
    this.submitted = false;
  }

  reset() {
    this.submitted = false;
    this.userTaken = false;
  }
}

export class PasswordValidation {
  static MatchPassword(AC:AbstractControl) {
    let password = AC.get('password').value;
    let password2 = AC.get('password2').value;
    if (password != password2) {
      AC.get('password2').setErrors({MatchPassword: true})
    } else {
      return null
    }
  }
}


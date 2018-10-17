import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  authorized = new BehaviorSubject<boolean>(false);
  registerView = new BehaviorSubject<boolean>(false);
  registerMessage = new BehaviorSubject<string>('');

  constructor(private http:HttpClient) {
  }

  login(email:string, password:string) {
    return this.http.post<any>('http://localhost:5000/login', {
      email: email,
      password: password
    }).subscribe(res => console.log(res.json));
  }

  register(name:string, email:string, username:string, password:string, password2:string) {
    return this.http.post<any>('http://localhost:5000/register', {
      name: name,
      email: email,
      username: username,
      password: password,
      password2: password2
    }).subscribe((res:any) => {
      this.setRegisterMessage(res.message);
    });
  }

  openRegisterPage(value: boolean) {
    this.registerView.next(value);
  }

  authorizeUser() {
    this.authorized.next(true);
  }

  unauthorizeUser() {
    this.authorized.next(false);
  }

  setRegisterMessage(message:string) {
    this.registerMessage.next(message);
  }
}

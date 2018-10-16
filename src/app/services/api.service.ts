import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  authorized = new BehaviorSubject<boolean>(true);
  registerView = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  login(email: string, password: string): Observable<any>{
    return this.http.post<any>('http://localhost:5000/login', {
      email: email,
      password: password
    });
  }

  register(name:string, email: string, username:string, password: string, password2: string): Observable<any> {
    return this.http.post<any>('http://localhost:5000/register', {
      name: name,
      email: email,
      username: username,
      password: password,
      password2: password2
    });
  }

  openRegisterPage() {
    this.registerView.next(true);
  }

  closeRegisterPage() {
    this.registerView.next(false);
  }

  authorizeUser() {
    this.authorized.next(true);
  }

  unauthorizeUser() {
    this.authorized.next(false);
  }
}

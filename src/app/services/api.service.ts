import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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
}

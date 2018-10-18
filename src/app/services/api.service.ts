import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  authorized = new BehaviorSubject<boolean>(false);
  registerView = new BehaviorSubject<boolean>(false);
  registerMessage = new BehaviorSubject<string>('');
  loginMessage = new BehaviorSubject<string>('');
  user = new BehaviorSubject<string>('');

  constructor(private http:HttpClient, private router:Router) {
  }

  login(username:string, password:string) {
    return this.http.post<any>('https://floating-citadel-31945.herokuapp.com/login', {
      username: username,
      password: password
    }).subscribe((res:any) => {
      this.loginMessage.next(res.message);
    });
  }

  register(name:string, email:string, username:string, password:string, password2:string) {
    return this.http.post<any>('https://floating-citadel-31945.herokuapp.com/register', {
      name: name,
      email: email,
      username: username,
      password: password,
      password2: password2
    }).subscribe((res:any) => {
      this.setRegisterMessage(res.message);
    });
  }

  openRegisterPage(value:boolean) {
    this.registerView.next(value);
  }

  authorizeUser() {
    this.authorized.next(true);
    this.router.navigate(['/home']);
  }

  unauthorizeUser() {
    this.authorized.next(false);
    this.router.navigate(['/login']);
    this.loginMessage.next('');
  }

  setRegisterMessage(message:string) {
    this.registerMessage.next(message);
  }

  setUserName(user:string) {
    this.user.next(user);
  }
}

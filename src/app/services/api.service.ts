import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  localTestPath = 'http://localhost:5000/';
  herokuPath = 'https://floating-citadel-31945.herokuapp.com/';

  authorized = new BehaviorSubject<boolean>(false);
  registerView = new BehaviorSubject<boolean>(false);
  registerMessage = new BehaviorSubject<string>('');
  loginMessage = new BehaviorSubject<string>('');
  imagePath = new BehaviorSubject<string>('');
  user = new BehaviorSubject<string>('');

  constructor(private http:HttpClient, private router:Router) {
  }

  login(username:string, password:string) {
    return this.http.post<any>(this.herokuPath + 'login', {
      username: username,
      password: password
    }).subscribe((res:any) => {
      this.loginMessage.next(res.message);
    });
  }

  register(name:string, email:string, username:string, password:string, password2:string) {
    return this.http.post<any>(this.herokuPath + 'register', {
      name: name,
      email: email,
      username: username,
      password: password,
      password2: password2
    }).subscribe((res:any) => {
      this.setRegisterMessage(res.message);
    });
  }

  addUserImage(image:File, user:string) {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post(this.herokuPath + 'addUserImage/' + user, formData)
      .subscribe((res:any) => {
        console.log(res);
        this.setImagePath(res.imageURL)
      });
  }

  getUserImage(username:string) {
    return this.http.get(this.herokuPath + 'getUserImage/' + username)
      .subscribe((res:any) => {
        this.setImagePath(res.message.toString());
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

  setImagePath(path:string) {
    this.imagePath.next(path);
  }
}

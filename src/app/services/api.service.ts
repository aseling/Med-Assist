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
  email = new BehaviorSubject<string>('');
  usersList = new BehaviorSubject<any[]>([]);
  permissions = new BehaviorSubject<boolean>(false);

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

  getAllUsers() {
    return this.http.get(this.localTestPath + 'getAllUsers')
    .subscribe((res:any) => {
      this.setUsersList(res);
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
        this.setImagePath(res.message);
      });
  }

  getUserEmail(username:string) {
    return this.http.get(this.herokuPath + 'getUserEmail/' + username)
      .subscribe((res:any) => {
        this.setUserEmail(res.message);
      });
  }

  getUserPermissions(username: string) {
    return this.http.get(this.localTestPath + 'getUserPermissions/' + username)
    .subscribe((res:any) => {
      this.setUserPermissions(res.message);
    });
  }

  // updateContactInfo(address:string, DOB:string, sex:string){
  //   return this.http.post<any>(this.herokuPath + 'register', {
  //     name: name,
  //     email: email,
  //     username: username,
  //     password: password,
  //     password2: password2
  // }

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

  setUserEmail(email:string) {
    this.email.next(email);
  }

  setUsersList(list: any[]) {
    this.usersList.next(list);
  }

  setUserPermissions(isAdmin: boolean) {
    this.permissions.next(isAdmin);
  }
}

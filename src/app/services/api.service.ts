import {User} from './../generic.interface';
import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  localTestPath = 'http://localhost:5000/';
  herokuPath = 'https://floating-citadel-31945.herokuapp.com/';

  authorized = new BehaviorSubject<boolean>(false);
  registerView = new BehaviorSubject<boolean>(false);
  changePassword = new BehaviorSubject<string>('');
  registerMessage = new BehaviorSubject<string>('');
  loginMessage = new BehaviorSubject<string>('');
  imagePath = new BehaviorSubject<string>('');
  user = new BehaviorSubject<string>('');
  email = new BehaviorSubject<string>('');
  usersList = new BehaviorSubject<User[]>([]);
  permissions = new BehaviorSubject<boolean>(false);
  addedEventMessage = new BehaviorSubject<string>('');
  usersEventsList = new BehaviorSubject<any[]>([]);
  userPrescriptions = new BehaviorSubject<any[]>([]);
  userBasicInfo = new BehaviorSubject<any[]>([]);
  reports = new BehaviorSubject<any[]>([]);
  usernameForAdminChat = new BehaviorSubject<string>('');
  forms = new BehaviorSubject<any[]>([]);

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

  checkCorrectPassword(username:string, password:string) {
    return this.http.post<any>(this.herokuPath + 'login', {
      username: username,
      password: password
    }).subscribe((res:any) => {
      this.allowChangePassword(res.message);
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

  addNewEvent(doctor:string, date:string, time:string, task:string, user:string) {
    return this.http.post<any>(this.herokuPath + 'addUserEvent/' + user, {
        doctor: doctor,
        date: date,
        time: time,
        task: task
      })
      .subscribe((res:any) => {
        this.setAddedEventMessage(res.message);
      });
  }

  getUserEvents(username:string) {
    return this.http.get(this.herokuPath + 'getUserEvents/' + username)
      .subscribe((res:any) => {
        this.setUsersEventList(res);
      });
  }

  getUserEventsByID(id:string) {
    return this.http.get(this.herokuPath + 'getUserEventsByID/' + id)
      .subscribe((res:any) => {
        this.setUsersEventList(res);
      });
  }

  getAllUsers() {
    return this.http.get(this.herokuPath + 'getAllUsers')
      .subscribe((res:any) => {
        this.setUsersList(res);
      });
  }

  addUserImage(image:File, user:string) {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post(this.herokuPath + 'addUserImage/' + user, formData)
      .subscribe((res:any) => {
        this.setImagePath(res.imageURL);
      });
  }

  addUserReport(pdfName:string, pdfDesc:string, report:File, user:string) {
    const formData = new FormData();
    formData.append('pdfName', pdfName);
    formData.append('pdfDesc', pdfDesc);
    formData.append('pdf', report);

    return this.http.post(this.herokuPath + 'uploadPdf/' + user, formData)
      .subscribe((res:any) => {
        this.getUserReports(user);
        this.getForms();
      });
  }

  getUserReports(username:string) {
    return this.http.get(this.herokuPath + 'getUserPdfs/' + username)
      .subscribe((res:any) => {
        this.setUserReports(res);
      });
  }

  setUserReports(reports:any) {
    this.reports.next(reports);
  }

  // Forms pulls from "root" admin account
  getForms() {
    return this.http.get(this.herokuPath + 'getUserPdfs/root')
      .subscribe((res:any) => {
        this.setForms(res);
      });
  }

  setForms(forms:any) {
    this.forms.next(forms);
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

  getUserPermissions(username:string) {
    return this.http.get(this.herokuPath + 'getUserPermissions/' + username)
      .subscribe((res:any) => {
        if (res.message === 'no permission set') {
          this.setUserPermissions(false);
        } else {
          this.setUserPermissions(res.message);
        }
      });
  }


  getUserInfo(username:string) {
    return this.http.get(this.herokuPath + 'getSingleUser/' + username)
      .subscribe(res => {
        this.setUsersPrescriptionList(res)
      });
  }

  getUsernameByID(id:string) {
    return this.http.get(this.herokuPath + 'getUsernameById/' + id)
      .subscribe((res:any) => {
        this.setUserNameForAdminChat(res.username);
      });
  }

  openRegisterPage(value:boolean) {
    this.registerView.next(value);
  }

  allowChangePassword(message:string) {
    this.changePassword.next(message);
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

  setAddedEventMessage(message:string) {
    this.addedEventMessage.next(message);
  }

  setUserName(user:string) {
    this.user.next(user);
  }

  setUserNameForAdminChat(user:string) {
    this.usernameForAdminChat.next(user);
  }

  setImagePath(path:string) {
    this.imagePath.next(path);
  }

  setUserEmail(email:string) {
    this.email.next(email);
  }

  setUsersList(list:any[]) {
    this.usersList.next(list);
  }

  setUsersPrescriptionList(list:any) {
    this.userPrescriptions.next(list);
  }

  setUsersEventList(list:any[]) {
    this.usersEventsList.next(list);
  }

  setUserPermissions(isAdmin:boolean) {
    this.permissions.next(isAdmin);
  }

// My Profile
  getUserBasicInfo(username:string) {
    return this.http.get(this.herokuPath + 'getSingleUser/' + username)
      .subscribe((user:any) => {
        this.setUserBasicInfo(user.message);
      });
  }

  updateBasicInfo(patientFirstName:string, patientLastName:string,
                  address:string, DOB:string, sex:string, maritalStatus:string,
                  language:string, race:string, ethnicity:string, user:string) {

    let body = new URLSearchParams();
    body.set('patientFirstName', patientFirstName);
    body.set('patientLastName', patientLastName);
    body.set('address', address);
    body.set('DOB', DOB);
    body.set('sex', sex);
    body.set('maritalStatus', maritalStatus);
    body.set('language', language);
    body.set('race', race);
    body.set('ethnicity', ethnicity);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(this.herokuPath + 'updateBasicInfo/' + user, body.toString(), options)
      .subscribe((res:any) => {

      });
  }

  setUserBasicInfo(userBasicInfo:any) {
    this.userBasicInfo.next(userBasicInfo);
  }

}

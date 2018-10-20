import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  observable;

  // private socket = io('http://localhost:5000'); //USE FOR LOCAL TESTING
  private socket = io('https://floating-citadel-31945.herokuapp.com');

  joinRoom(data) {
    this.socket.emit('join', data);
  }

  newUserJoined() {
    return this.observable = new Observable<{user:string, message:string}>(observer=> {
      this.socket.on('new user joined', (data)=> {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
  }

  leaveRoom(data) {
    this.socket.emit('leave', data);
  }

  userLeftRoom() {
    return this.observable = new Observable<{user:string, message:string}>(observer=> {
      this.socket.on('left room', (data)=> {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  newMessageReceived() {
    return this.observable = new Observable<{user:string, message:string}>(observer=> {
      this.socket.on('new message', (data)=> {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
  }
}

import {Component} from '@angular/core';
import {ChatService} from '../services/chat.service';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  user:string;
  room:string;
  messageText:string;
  messageArray:Array<{user:String,message:String}> = [];
  roomChoice = ["Dr. Phil", "Dr. Smith", "Dr. Janice"];
  joined = false;
  roomIndex:number;
  scroll = document.getElementById("message-screen");

  constructor(private chatService:ChatService, private apiService: ApiService) {
    this.chatService.newUserJoined().subscribe(data => {
      this.messageArray.push(data);
      ChatComponent.screenScroll();
    });

    this.chatService.userLeftRoom().subscribe(data => {
      this.messageArray.push(data);
      ChatComponent.screenScroll();
    });

    this.chatService.newMessageReceived().subscribe(data => {
      this.messageArray.push(data);
      ChatComponent.screenScroll();
    });

    this.apiService.user.subscribe(user => {
      this.user = user;
     console.log(this.user);
    });
  }

  join() {
    console.log(this.room);
    this.chatService.joinRoom({user: this.user, room: this.room});
    this.joined = true;
    ChatComponent.screenScroll();
  }

  leave() {
    this.chatService.leaveRoom({user: this.user, room: this.room});
    this.messageArray = [];
    this.joined = false;
    ChatComponent.screenScroll();
  }

  sendMessage() {
    this.chatService.sendMessage({user: this.user, room: this.room, message: this.messageText});
    this.messageText = '';

    ChatComponent.screenScroll();
  }

  selectRoom(index:number) {
    this.leave();
    this.room = this.roomChoice[index];
    this.roomIndex = index;
    this.join();
  }

  static screenScroll() {
    let scroll = document.getElementById("message-screen");
    scroll.scrollTop = scroll.scrollHeight;
  }
}

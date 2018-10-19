import {Component} from '@angular/core';
import {ChatService} from '../services/chat.service';
import {ApiService} from "../services/api.service";
import anime from 'animejs'

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
  yourMessage: boolean;

  constructor(private chatService:ChatService, private apiService:ApiService) {
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
    });
  }

  join() {
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
    if (this.roomIndex != index) {
      this.leave();
      this.room = this.roomChoice[index];
      this.roomIndex = index;
      this.join();
    }
  }

  static screenScroll() {
    let scroll = document.getElementById("message-screen");
    scroll.scrollTop = scroll.scrollHeight;
  }

  selectRoomAnimation() {
    var easing = anime({
      targets: '#easing .expand',
      translateY: [
        {value: -20, duration: 100, elasticity: 100},
        {value: 10, duration: 100, elasticity: 100},
        {value: 0, duration: 100, delay: 100, elasticity: 100}
      ],
      color: '#FFFFFF',
      height: 120,
      padding: 20,
      fontSize: 40,
      backgroundColor: '#c1626a',
      marginTop: 5,
      marginBottom: 5,
      duration: 200,
    });

    var shrink = anime({
      targets: '#easing .shrink',
      color: '#000',
      height: 75,
      padding: 10,
      fontSize: 28,
      backgroundColor: '#EAE7EA',
      marginTop: 0,
      marginBottom: 0,
      duration: 100,
    });
  }
}

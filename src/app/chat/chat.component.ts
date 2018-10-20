import {Component, Renderer2} from '@angular/core';
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
  messageArray:{user: string; message: string}[];
  roomChoice = ["Dr. Phil", "Dr. Smith", "Dr. Janice"];
  roomIndex:number;
  scroll = document.getElementById("message-screen");

  constructor(private chatService:ChatService, private apiService:ApiService, private renderer:Renderer2) {
    this.chatService.newUserJoined().subscribe(data => {
      this.messageArray.push(data);
    });

    this.chatService.userLeftRoom().subscribe(data => {
      this.messageArray.push(data);
    });

    this.chatService.newMessageReceived().subscribe(data => {
      this.messageArray.push(data);
      this.screenScroll();
    });

    this.apiService.user.subscribe(user => {
      this.user = user;
    });
  }

  join() {
    this.chatService.joinRoom({user: this.user, room: this.room});
  }

  leave() {
    this.chatService.leaveRoom({user: this.user, room: this.room});
    this.messageArray = [];
  }

  sendMessage() {
    this.chatService.sendMessage({user: this.user, room: this.room, message: this.messageText});
    this.messageText = '';
    this.screenScroll();
  }

  selectRoom(index:number) {
    if (this.roomIndex != index) {
      this.leave();
      this.room = this.roomChoice[index];
      this.roomIndex = index;
      this.join();
    }
  }

  // STILL A SUPER HACK WAY TO FIX THE SCROLL TO BOTTOM WHEN LARGE AMOUNT OF TEXT IS SENT. I NEED TO WORK ON THIS.
  ngAfterViewChecked() {
    this.screenScroll();
  }

  screenScroll() {
    this.renderer.selectRootElement("#end").scrollIntoView();

    // document.querySelector('#end').scrollIntoView();

    //SUPER HACK WAY TO FIX THE SCROLL TO BOTTOM WHEN LARGE AMOUNT OF TEXT IS SENT. I NEED TO WORK ON THIS.
    // setTimeout(() => {
    //   this.renderer.selectRootElement("#end").scrollIntoView()
    // }, 100);
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

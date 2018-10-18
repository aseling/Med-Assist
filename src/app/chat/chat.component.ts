import {Component, OnInIt} from '@angular/core';
import {ChatService} from "../services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInIt{

  user:String;
  room:String;
  messageText:String;
  messageArray:Array<{user:String,message:String}> = [];
  roomChoice = ["Dr. Phil","Dr. Smith","Dr. Janice"];
  joined = false;
  roomIndex:numer;
  scroll = document.getElementById("message-screen");

  constructor(private _chatService:ChatService) {
    this._chatService.newUserJoined().subscribe(data => {
      this.messageArray.push(data);
      ChatComponent.screenScroll();
    });

    this._chatService.userLeftRoom().subscribe(data => {
      this.messageArray.push(data);
      ChatComponent.screenScroll();
    });

    this._chatService.newMessageReceived().subscribe(data => {
      this.messageArray.push(data);
      ChatComponent.screenScroll();
    });
  }

  ngOnInit() {

  }

  join() {
    console.log(this.room);
    this._chatService.joinRoom({user: this.user, room: this.room});
    this.joined = true;
    ChatComponent.screenScroll();
  }

  leave() {
    this._chatService.leaveRoom({user: this.user, room: this.room});
    this.messageArray = [];
    this.joined = false;
    ChatComponent.screenScroll();
  }

  sendMessage() {
    this._chatService.sendMessage({user: this.user, room: this.room, message: this.messageText});
    this.messageText = '';

    ChatComponent.screenScroll();
  }

  selectRoom(index: number) {
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

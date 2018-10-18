import {Component} from '@angular/core';
import {ChatService} from "../services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  user:String;
  room:String;
  messageText:String;
  messageArray:Array<{user:String,message:String}> = [];
  roomChoice = ["Dr. Phil","Dr. Smith","Dr. Janice"];
  joined = false;

  constructor(private _chatService:ChatService) {
    this._chatService.newUserJoined().subscribe(data => {
      this.messageArray.push(data)
    });

    this._chatService.userLeftRoom().subscribe(data => {
      this.messageArray.push(data)
    });

    this._chatService.newMessageReceived().subscribe(data => {
      this.messageArray.push(data)
    });
  }

  join() {
    console.log(this.room);
    this._chatService.joinRoom({user: this.user, room: this.room});
    this.joined = true;
  }

  leave() {
    this._chatService.leaveRoom({user: this.user, room: this.room});
    this.messageArray = [];
    this.joined = false;
  }

  sendMessage() {
    this._chatService.sendMessage({user: this.user, room: this.room, message: this.messageText});
    this.messageText = '';
  }

  selectRoom(index: number) {
    this.room = this.roomChoice[index];
  }
}

import { Observable } from 'node_modules/rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainBodyService {

  constructor() { }

  private isShown: boolean;

  show() {
    this.isShown = true;
  }

  hide() {
    this.isShown = false;
  }

  getIsShown(): boolean {
    return this.isShown;
  }
}

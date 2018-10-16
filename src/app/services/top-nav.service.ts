import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopNavService {
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



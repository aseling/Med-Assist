import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SideNavService {
  private isShown: boolean;

  constructor() {
    this.isShown = false;
  }

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

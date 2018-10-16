import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  isShown: boolean;

  constructor() {
    this.isShown = false;
  }

  show() {
    this.isShown = true;
  }

  hide() {
    this.isShown = false;
  }
}

import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  animations: [
    trigger("openClose", [
      state('closed', style({
        visibility: 'hidden',
        height: '0',
        transform: 'rotate(-360deg)',
        fontSize: '0',
        opacity: 0
        // visibility: 'visible',
        // height: '150px',
        // fontSize: '15px',
        // transform: 'rotate(360deg)',
        // opacity: 1
      })),
      state('open', style({
        visibility: 'visible',
        height: '150px',
        fontSize: '15px',
        transform: 'rotate(360deg)',
        opacity: 1
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ])
    ])
  ]
})
export class TopNavComponent implements OnInit {

  dropDownOpenClose = 'closed';

  constructor() {
  }

  ngOnInit() {
  }

  mouseEnter() {
    this.dropDownOpenClose = 'open';
    console.log(this.dropDownOpenClose);
  }

  mouseLeave() {
    this.dropDownOpenClose = 'closed';
    console.log(this.dropDownOpenClose);
  }
}

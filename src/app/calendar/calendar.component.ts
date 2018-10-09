import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  shortHandWeekDays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  currentAppointments = ["11:00 AM with Dr. Phil", "Blood pressure medicine refill"];
  futureAppointments = ["THU, 10/04/18 11:00 AM", "TUES, 10/09/2018 8:00 AM", "WED, 10/10/18 11:00 AM"];
  numOfDaysInMonth = [];

  currentDate = new Date().getDate();
  monthNum = new Date().getMonth();
  currentYear = new Date().getFullYear();
  dayOfWeekNum = new Date().getDay();
  firstOfEachMonthNum:string;
  currentDayName:string;
  shorthandDayName:string;
  monthName:string;

  constructor() {
  }

  ngOnInit() {
    this.getDayName();
    this.getMonthName();
    this.numOfDaysArray();
  }

  backOneMonth() {
    this.monthNum--;
    if (this.monthNum <= -1) {
      this.monthNum = 11;
      this.currentYear--;
    }
    this.numOfDaysArray();
    console.log(new Date(this.currentYear, this.monthNum + 1, 0), this.firstOfEachMonthNum);
    this.getMonthName();
  }

  forwardOneMonth() {
    this.monthNum++;
    if (this.monthNum >= 12) {
      this.monthNum = 0;
      this.currentYear++;
    }
    this.numOfDaysArray();
    console.log(new Date(this.currentYear, this.monthNum + 1, 0), this.firstOfEachMonthNum);
    this.getMonthName();
  }

  getDayName() {
    switch (this.dayOfWeekNum) {
      case 0:
        this.currentDayName = "Sunday";
        this.shorthandDayName = "Sun";
        break;
      case 1:
        this.currentDayName = "Monday";
        this.shorthandDayName = "Mon";
        break;
      case 2:
        this.currentDayName = "Tuesday";
        this.shorthandDayName = "Tue";
        break;
      case 3:
        this.currentDayName = "Wednesday";
        this.shorthandDayName = "Wed";
        break;
      case 4:
        this.currentDayName = "Thursday";
        this.shorthandDayName = "Thu";
        break;
      case 5:
        this.currentDayName = "Friday";
        this.shorthandDayName = "Fri";
        break;
      case 6:
        this.currentDayName = "Saturday";
        this.shorthandDayName = "Sat";
        break;
    }
  }

  getMonthName() {
    switch (this.monthNum) {
      case 0:
        this.monthName = "January";
        break;
      case 1:
        this.monthName = "February";
        break;
      case 2:
        this.monthName = "May";
        break;
      case 3:
        this.monthName = "April";
        break;
      case 4:
        this.monthName = "May";
        break;
      case 5:
        this.monthName = "June";
        break;
      case 6:
        this.monthName = "July";
        break;
      case 7:
        this.monthName = "August";
        break;
      case 8:
        this.monthName = "September";
        break;
      case 9:
        this.monthName = "October";
        break;
      case 10:
        this.monthName = "November";
        break;
      case 11:
        this.monthName = "December";
        break;
    }
  }

  numOfDaysArray() {
    this.numOfDaysInMonth = [];
    this.firstOfEachMonthNum = new Date(this.currentYear, this.monthNum, 1).getDay().toString();
    this.adjustCalendarFirstPosition();

    for (let i = 0; i < (new Date(this.currentYear, this.monthNum + 1, 0).getDate()); i++) {
      this.numOfDaysInMonth.push((i + 1).toString());
    }
  }

  adjustCalendarFirstPosition() {
    if (this.firstOfEachMonthNum == "1") {
      this.numOfDaysInMonth.push('');
    } else if (this.firstOfEachMonthNum == "2") {
      for (let i = 0; i < 2; i++) {
        this.numOfDaysInMonth.push('');
      }
    } else if (this.firstOfEachMonthNum == "3") {
      for (let i = 0; i < 3; i++) {
        this.numOfDaysInMonth.push('');
      }
    } else if (this.firstOfEachMonthNum == "4") {
      for (let i = 0; i < 4; i++) {
        this.numOfDaysInMonth.push('');
      }
    } else if (this.firstOfEachMonthNum == "5") {
      for (let i = 0; i < 5; i++) {
        this.numOfDaysInMonth.push('');
      }
    } else if(this.firstOfEachMonthNum == "6") {
      for (let i = 0; i < 6; i++) {
        this.numOfDaysInMonth.push('');
      }
    }
  }
}

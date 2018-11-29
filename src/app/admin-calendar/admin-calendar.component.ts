import {Component, OnInit} from '@angular/core';
import {MatDatepickerInputEvent} from '../../../node_modules/@angular/material';
import {ApiService} from "../services/api.service";
import {MatSnackBar}from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-calendar',
  templateUrl: './admin-calendar.component.html',
  styleUrls: ['./admin-calendar.component.css']
})
export class AdminCalendarComponent implements OnInit {
  weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  shortHandWeekDays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  doctors = [
    {
      name: "Dr. Phil",
      image: "https://vignette.wikia.nocookie.net/epicrapbattlesofhistory/images/2/26/Dr._Phil_Based_On.png/revision/latest?cb=20160903135636"
    },
    {
      name: "Dr. Smith",
      image: "http://pluspng.com/img-png/doctor-hd-png-doctor-white-background-hd-640.png"
    },
    {
      name: "Dr. Janice",
      image: "data:image/jpeg;base64,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"
    }
  ];

  times = [
    '8:00 AM', '8:30 AM',
    '9:00 AM', '9:30 AM',
    '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM'
  ];

  todayAppointments = [];
  futureAppointments = [];
  pastAppointments = [];
  allEvents = [];
  numOfDaysInMonth = [];

  tooltipInfo = [];
  tooltipString = "";

  user:string;
  minDate = new Date();
  todayFormatted = this.minDate.toLocaleDateString("en-US");
  currentDate = new Date().getDate();
  monthNum = new Date().getMonth();
  currentYear = new Date().getFullYear();
  dayOfWeekNum = new Date().getDay();
  firstOfEachMonthNum:string;
  currentDayName:string;
  shorthandDayName:string;
  monthName:string;
  selectedDoctorName = "";
  selectedDate = "";
  selectedTime = "";
  visitDescription = "";
  step = 0;
  isLinear = false;
  date;
  _id;

  constructor(private apiService:ApiService, 
              public snackBar:MatSnackBar, 
              private activatedRoute:ActivatedRoute, 
              private router:Router) {
  }

  ngOnInit() {
    this.getDayName();
    this.getMonthName();

    this._id = this.activatedRoute.snapshot.params['_id'];

    this.getAllUserEvents();

    this.apiService.user.subscribe(user => {
      this.user = user;
    });

    this.apiService.usersEventsList.subscribe(events => {
      this.todayAppointments = [];
      this.futureAppointments = [];
      this.pastAppointments = [];
      this.allEvents = [];

      events.sort(function compare(a, b) {
        let dateA = +new Date(a.date);
        let dateB = +new Date(b.date);
        return dateA - dateB;
      });

      this.allEvents = events;

      // SORT EVENTS BY DATE
      events.map((event) => {
        let today = +new Date(this.todayFormatted);
        let eventDate = +new Date(event.date);

        if (eventDate == today) {
          this.todayAppointments.push(event);
        } else if (eventDate > today) {
          this.futureAppointments.push(event);
        } else if (eventDate < today) {
          this.pastAppointments.push(event);
        }
      });
      this.numOfDaysArray();
    });

    this.apiService.addedEventMessage.subscribe(message => {
      if (message == "event added to calendar") {
        console.log(message);
        this.getAllUserEvents();
      }
    });
  }

  backOneMonth() {
    this.monthNum--;
    if (this.monthNum <= -1) {
      this.monthNum = 11;
      this.currentYear--;
    }
    this.numOfDaysArray();
    // console.log(new Date(this.currentYear, this.monthNum + 1, 0), this.firstOfEachMonthNum);
    this.getMonthName();
  }

  forwardOneMonth() {
    this.monthNum++;
    if (this.monthNum >= 12) {
      this.monthNum = 0;
      this.currentYear++;
    }
    this.numOfDaysArray();
    // console.log(new Date(this.currentYear, this.monthNum + 1, 0), this.firstOfEachMonthNum);
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

      let eventHappening = false;
      let checkDate = new Date(this.monthNum + 1 + "/" + (i + 1) + "/" + this.currentYear).toLocaleDateString("en-us").toString();
      this.allEvents.filter(event => {
        if (event.date == checkDate) {
          eventHappening = true;
        }
      });

      let info = {
        day: (i + 1).toString(),
        date: new Date(this.monthNum + 1 + "/" + (i + 1) + "/" + this.currentYear).toLocaleDateString("en-us").toString(),
        hasEvent: eventHappening
      };

      // this.numOfDaysInMonth.push((i + 1).toString());
      this.numOfDaysInMonth.push(info);
    }

    // console.log(this.numOfDaysInMonth);
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
    } else if (this.firstOfEachMonthNum == "6") {
      for (let i = 0; i < 6; i++) {
        this.numOfDaysInMonth.push('');
      }
    }
  }

  selectedDoctor(index) {
    this.selectedDoctorName = index.name;
  }

  submitNewAppt() {
    this.apiService.addNewEvent(this.selectedDoctorName, this.selectedDate, this.selectedTime, this.visitDescription, this.user)
    this.openSnackBar();
    this.selectedDoctorName = "";
    this.selectedDate = "";
    this.selectedTime = "";
    this.visitDescription = "";
  }

  cancel() {
    console.log("CANCEL");
    this.selectedDoctorName = "";
    this.selectedDate = "";
    this.selectedTime = "";
    this.visitDescription = "";
  }

  addEvent(type:string, event:MatDatepickerInputEvent<Date>) {
    this.selectedDate = new Date(event.value).toLocaleDateString("en-US");
  }

  myFilter = (d:Date):boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  setStep(index:number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  openSnackBar() {
    let message = "Your Appointment on " + this.selectedDate + " with " + this.selectedDoctorName + " at " + this.selectedTime + " was added";
    this.snackBar.open(message, "", {
      duration: 5000
    });
  }

  getAllUserEvents() {
    this.apiService.getUserEventsByID(this._id);
  }

  getDateOnHover(index) {
    this.tooltipInfo = [];
    this.tooltipString = "";
    this.date = new Date(this.monthNum + 1 + "/" + index + "/" + this.currentYear).toLocaleDateString("en-us");

    this.allEvents.filter(event => {
      if (event.date == this.date) {
        this.tooltipInfo.push(event);
      }
    });

    this.tooltipInfo.sort(function compare(a, b) {
      return +new Date('1970/01/01 ' + a.time) - +new Date('1970/01/01 ' + b.time);
    });

    this.tooltipInfo.map(info => {
      this.tooltipString = this.tooltipString.concat("        ");
      this.tooltipString = this.tooltipString.concat(info.date + " at " + info.time + "   ");
    });
  }
}

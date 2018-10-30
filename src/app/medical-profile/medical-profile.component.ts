import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-medical-profile',
  templateUrl: './medical-profile.component.html',
  styleUrls: ['./medical-profile.component.css']

})
export class MedicalProfileComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

export class patientContactInformation{
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}

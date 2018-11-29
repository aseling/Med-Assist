import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  forms;
  clickedUrl;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.forms.subscribe(list => {
      this.forms = list;
    });
  }

  changeUrl(index) {
    this.clickedUrl = this.forms[index].pdfUrl;
  }
}

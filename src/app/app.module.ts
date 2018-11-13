import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SideNavBarComponent} from './side-nav-bar/side-nav-bar.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {CalendarComponent} from './calendar/calendar.component';
import {FormsComponent} from './forms/forms.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NewPatientFormComponent} from './new-patient-form/new-patient-form.component';
import {PrescriptionRefillComponent} from './prescription-refill/prescription-refill.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ReferencesComponent} from './references/references.component';
import {ReportsComponent} from './reports/reports.component';
import {VideosComponent} from './videos/videos.component';
import {TopNavComponent} from './top-nav/top-nav.component';
import {ChatComponent} from './chat/chat.component';
import {MedicalProfileComponent} from './medical-profile/medical-profile.component';
import {MyMedicineComponent} from './my-medicine/my-medicine.component';
import {HelpfulLinksComponent} from './helpful-links/helpful-links.component';
import {PdfViewerComponent} from './pdf-viewer/pdf-viewer.component';
import {RegisterComponent} from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatFormFieldModule, MatIconModule, MatTabsModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    AccountSettingsComponent,
    CalendarComponent,
    FormsComponent,
    HomeComponent,
    LoginComponent,
    NewPatientFormComponent,
    PrescriptionRefillComponent,
    UserProfileComponent,
    ReferencesComponent,
    ReportsComponent,
    VideosComponent,
    TopNavComponent,
    ChatComponent,
    MedicalProfileComponent,
    MyMedicineComponent,
    HelpfulLinksComponent,
    PdfViewerComponent,
    RegisterComponent,
    LoadingScreenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatSnackBarModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}

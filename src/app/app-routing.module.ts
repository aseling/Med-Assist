import { ManageUsersComponent } from './manage-users/manage-users.component';
import { HelpfulLinksComponent } from './helpful-links/helpful-links.component';
import { MyMedicineComponent } from './my-medicine/my-medicine.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {NewPatientFormComponent} from "./new-patient-form/new-patient-form.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {ReferencesComponent} from "./references/references.component";
import {VideosComponent} from "./videos/videos.component";
import {ReportsComponent} from "./reports/reports.component";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {PrescriptionRefillComponent} from "./prescription-refill/prescription-refill.component";
import {FormsComponent} from "./forms/forms.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ChatComponent} from "./chat/chat.component";
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-patient-form', component: NewPatientFormComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'prescription-refill', component: PrescriptionRefillComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'my-medicine', component: MyMedicineComponent },
  { path: 'helpful-links', component: HelpfulLinksComponent },
  { path: 'reports/view', component: PdfViewerComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'manage-users', component: ManageUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

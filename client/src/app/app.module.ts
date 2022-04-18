import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { InvoicingComponent } from './teams/accounting/invoicing/invoicing.component';
import { TasksComponent } from './users/tasks/tasks.component';
import { SettingsComponent } from './settings/settings.component';
import { OutputPdfComponent } from './teams/accounting/invoicing/output-pdf/output-pdf.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { TimetrackComponent } from './topmenu/components/timetrack/timetrack.component';
import { SearchComponent } from './topmenu/components/search/search.component';
import { ProfileComponent } from './topmenu/components/profile/profile.component';
import { NotificationComponent } from './topmenu/components/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CalendarComponent } from './users/calendar/calendar.component';
import { RedactionPlanComponent } from './teams/marketing/redaction-plan/redaction-plan.component';
import { PostPlanerComponent } from './teams/marketing/post-planer/post-planer.component';
import { BookmarksComponent } from './topmenu/components/bookmarks/bookmarks.component'

//Angular Material Imports
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    InvoicingComponent,
    TasksComponent,
    SettingsComponent,
    OutputPdfComponent,
    TopmenuComponent,
    TimetrackComponent,
    SearchComponent,
    ProfileComponent,
    NotificationComponent,
    ProjectsComponent,
    TicketsComponent,
    CalendarComponent,
    RedactionPlanComponent,
    PostPlanerComponent,
    BookmarksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTabsModule,
    MatChipsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'invoicing', component: InvoicingComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'preview' , component: OutputPdfComponent},
      { path: 'projects' , component: ProjectsComponent},
      { path: 'tickets' , component: TicketsComponent},
      { path: 'teams/marketing/redaction-plan' , component: RedactionPlanComponent},
      { path: 'teams/marketing/post-planer' , component: PostPlanerComponent},
      { path: 'user/tasks', component: TasksComponent },
      { path: 'user/calendar' , component: CalendarComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

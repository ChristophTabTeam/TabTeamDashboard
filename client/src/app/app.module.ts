import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { TicketsComponent } from './tickets/tickets.component';
import { OutputPdfComponent } from './invoicing/output-pdf/output-pdf.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { TimetrackComponent } from './topmenu/components/timetrack/timetrack.component';
import { SearchComponent } from './topmenu/components/search/search.component';
import { ProfileComponent } from './topmenu/components/profile/profile.component';
import { NotificationComponent } from './topmenu/components/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    InvoicingComponent,
    TasksComponent,
    ProjectsComponent,
    SettingsComponent,
    TicketsComponent,
    OutputPdfComponent,
    TopmenuComponent,
    TimetrackComponent,
    SearchComponent,
    ProfileComponent,
    NotificationComponent,
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
    MatChipsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'tickets', component: TicketsComponent },
      { path: 'invoicing', component: InvoicingComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'preview' , component: OutputPdfComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

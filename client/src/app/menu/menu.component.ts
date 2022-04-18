import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faBook, faCalendar, faCalendarCheck, faCalendarPlus, faChartLine, faDiagramProject, faFileInvoiceDollar, faGear, faListCheck, faPeopleGroup, faTicket, faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu = new FormGroup({
    teamSelect: new FormControl('')
  })

  // Fontawesome Imports
  faChartLine = faChartLine
  faListCheck = faListCheck
  faDiagramProject = faDiagramProject
  faTicket = faTicket
  faFileInvoiceDollar = faFileInvoiceDollar
  faGear = faGear
  faCalendarPlus = faCalendarPlus
  faCalendarCheck = faCalendarCheck
  faCalendar = faCalendar
  faUser = faUser
  faPeopleGroup = faPeopleGroup
  faBook = faBook

  navStatus: boolean = false
  teamSelect: string

  constructor() { }

  ngOnInit(): void {
  }

  changeNav() {
    this.navStatus = !this.navStatus
  }
}

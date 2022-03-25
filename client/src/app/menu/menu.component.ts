import { Component, OnInit } from '@angular/core';
import { faChartLine, faDiagramProject, faFileInvoiceDollar, faGear, faListCheck, faTicket } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faChartLine = faChartLine
  faListCheck = faListCheck
  faDiagramProject = faDiagramProject
  faTicket = faTicket
  faFileInvoiceDollar = faFileInvoiceDollar
  faGear = faGear

  constructor() { }

  ngOnInit(): void {
  }

}

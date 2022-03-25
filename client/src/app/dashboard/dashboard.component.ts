import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  currentDate = new Date().toLocaleDateString()
  constructor( ) { }

  ngOnInit(): void {
  }


}

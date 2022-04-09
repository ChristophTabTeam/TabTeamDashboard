import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title: string


  currentDate = new Date().toLocaleDateString()
  constructor( ) { }

  ngOnInit(): void {
    const time = new Date().getTime()
    const hours = new Date(time).getHours()
    const user = 'Christoph'
    if (hours < 5) {
      this.title = 'Gute Nacht, ' + user
    } else if (hours < 11) {
      this.title = 'Guten Morgen, ' + user
    } else if (hours < 18 ) {
      this.title = 'Guten Tag, ' + user
    } else if (hours < 21 ) {
      this.title = 'Guten Abend, ' + user
    } else {
      this.title = 'Gute Nacht, ' + user
    }
  }


}

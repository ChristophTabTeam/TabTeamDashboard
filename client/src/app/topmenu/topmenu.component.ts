import { Component, Input, OnInit } from '@angular/core';
import { faArrowRightToBracket, faBell, faBookmark, faMagnifyingGlass, faStopwatch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {
  @Input() title: string
  faBell = faBell
  faStopwatch = faStopwatch
  faMagnifyingGlass = faMagnifyingGlass
  faBookmark = faBookmark

  constructor() { }

  ngOnInit(): void {
  }

}

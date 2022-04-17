import { Component, Input, OnInit } from '@angular/core';
import { faBell, faBookmark, faMagnifyingGlass, faStopwatch, faX } from '@fortawesome/free-solid-svg-icons'

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
  faX = faX

  menuActive: boolean = false
  activeMenu: string
  menus = {
    search: 'search',
    notifications: 'notifications',
    timetrack: 'timetrack',
    bookmarks: 'bookmarks',
    profile: 'profile'
  }

  constructor() { }

  ngOnInit(): void {
  }

  setMenu(elem: string) {
    this.menuActive = true
    this.activeMenu = elem
  }

  closeMenu() {
    this.menuActive = false
  }
}

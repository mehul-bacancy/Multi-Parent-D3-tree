import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor() { }
  navbarOpen: boolean = false;
  ngOnInit() {
  }

  toogleNavbar() {
    this.navbarOpen = !this.navbarOpen
  }

}

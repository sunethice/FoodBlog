import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'headerbottom',
  templateUrl: './headerbottom.component.html',
  styleUrls: ['./headerbottom.component.css']
})
export class HeaderbottomComponent implements OnInit {
  isNavbarCollapsed=true;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isAdmin = true;
  constructor( private router: Router) { }

  ngOnInit() {
  }

  goToAdmin(url){
    this.router.navigate([url]).then((res) => {
        if (res) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
    });
  }
}

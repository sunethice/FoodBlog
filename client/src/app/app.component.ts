import { Component, OnInit } from '@angular/core';
import { EchoService } from './services/echo.service';
import { Observable } from 'rxjs/Observable';
import { MyserviceService } from './services/myservice.service';
import { Router } from "@angular/router";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public response: Observable<any>;
    public todaydate;

    constructor(private echoService: EchoService, private myservice: MyserviceService, private router: Router) {}

    ngOnInit() {
        this.todaydate = this.myservice.showTodayDate();
        this.response = this.echoService.makeCall();
    }
}
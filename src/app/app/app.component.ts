import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth-service";
import {Router} from "@angular/router";
import {CordovaService} from "../services/cordova.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Angular Starter Home page";

  constructor(private authService: AuthService,
              private router: Router,
              private cordova: CordovaService) {
    this.cordova.onDeviceReady
    .then(() => {
      console.log("Cordova Device is ready!");
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CordovaService } from '../services/cordova.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgData: string;

  constructor(private cordova: CordovaService) { }

  ngOnInit() {
  }

  takePicture() {
    this.cordova.camera.getPicture()
      .then((fileUri) => {
        console.log('Got picture: ' + fileUri);
        this.imgData = fileUri;
      });
  }

}

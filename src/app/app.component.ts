import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {QRCodeModule} from "angularx-qrcode";
import {FormsModule} from "@angular/forms";
import {SafeValue} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, QRCodeModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputVal = '';
  qrdata = '';
  qrDownloadLink :SafeValue = '';

  generateQR(){
    this.qrdata= this.inputVal;
  }

  onChangeURL(url : any){
    this.qrDownloadLink = url;
  }
}

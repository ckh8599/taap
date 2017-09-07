import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { CodePage } from '../code/code';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BrowserModule, SafeResourceUrl, DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'webview-home',
  templateUrl: 'webview.html'
})
export class WebViewPage {

    public url: SafeResourceUrl;
    constructor(private sanitizer: DomSanitizer) {
        this.url = sanitizer.bypassSecurityTrustResourceUrl("https://www.caap.co.kr/userReserveShipB.do?companyCd=CA000129")
    }
}

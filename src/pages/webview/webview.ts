import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { CodePage } from '../code/code';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'webview-home',
  templateUrl: 'webview.html'
})
export class WebViewPage {

    constructor(private iab: InAppBrowser) { }

    openURL(){
        const browser = this.iab.create('https://www.caap.co.kr/userReserveShipB.do?companyCd=CA000129', '_self', 'toolbar=yes' );
        browser.close();
    }
}

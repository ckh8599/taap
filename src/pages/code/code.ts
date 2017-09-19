import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Brightness } from '@ionic-native/brightness';

@Component({
  selector: 'page-code',
  templateUrl: 'code.html'
})
export class CodePage {
  
    public currentBrightnessValue: number;

    constructor(public viewCtrl: ViewController, private brightness: Brightness) {
      let currentBrightnessValue = this.brightness.getBrightness();
      this.brightness.setBrightness(1);
      // console.log(this.brightness.getBrightness());
    }
    
    close() {
      this.brightness.setBrightness(this.currentBrightnessValue);
      this.viewCtrl.dismiss();
    }
}

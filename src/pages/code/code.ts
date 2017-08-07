import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-code',
  templateUrl: 'code.html'
})
export class CodePage {
    constructor(public viewCtrl: ViewController) {}
    
    close() {
      this.viewCtrl.dismiss();
    }
}

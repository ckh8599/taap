import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { CodePage } from '../code/code';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public popoverCtrl: PopoverController) {}

  showCode(myEvent) {
    let popover = this.popoverCtrl.create(CodePage);
    popover.present({
      ev: myEvent
    });
  }
}

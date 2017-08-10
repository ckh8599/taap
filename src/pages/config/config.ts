import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {
    pushYN: boolean;

    changePush() {
      console.log('changePush state is :' + this.pushYN);
    }
}

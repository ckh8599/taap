import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { PopoverController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { CodePage } from '../code/code';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) {}

  showCode() {
    let profileModal = this.modalCtrl.create(CodePage);
    profileModal.present();
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {
    pushYN: boolean;

    constructor(private toastCtrl: ToastController) {

    }
    
    changePush() {
      console.log('changePush state is :' + this.pushYN);
      
    }

    sendPush() {

      console.log('sendPush is pushed');

      let toast = this.toastCtrl.create({
        message: 'User was added successfully',
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }

    public msgList: any[] = [
      {id:1, "msg":"푸시알림이 발송되었습니다. 흐흐흐 "},
      {id:2, "msg":"푸시알림이 발송되었습니다. 헤헤헤 "},
      {id:3, "msg":"푸시알림이 발송되었습니다. 히히히 "}
    ];
}

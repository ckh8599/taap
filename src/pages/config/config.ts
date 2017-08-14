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

    public msgList: any[] = [
      {id:1, "msg":"푸시알림이 발송되었습니다. 흐흐흐 "},
      {id:2, "msg":"푸시알림이 발송되었습니다. 헤헤헤 "},
      {id:3, "msg":"푸시알림이 발송되었습니다. 히히히 "}
    ];
    
    changePush() {
      console.log('changePush state is :' + this.pushYN);
      
    }

    sendPush() {

      if(this.pushYN){
          let toast = this.toastCtrl.create({
          message: '푸시알림이 하나더 발송되었습니다. 훃훃훃',
          duration: 3000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      }
    }
}

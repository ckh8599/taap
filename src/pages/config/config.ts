import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {
    pushYN: boolean;
    public msgList: any[] = [];
    constructor(private toastCtrl: ToastController, private storage: Storage) {
      this.storage.forEach(element => {
        this.msgList.push({id:1, "msg":element});
      });
    }
    
    msgList_ = [
      {id:1, "msg":"푸시알림이 발송되었습니다. 흐흐흐 "},
      {id:2, "msg":"푸시알림이 발송되었습니다. 헤헤헤 "},
      {id:3, "msg":"푸시알림이 발송되었습니다. 히히히 "}
    ];

    changePush() {
      console.log('changePush state is :' + this.pushYN);
      
    }

    sendPush(pushMsg) {

      if(this.pushYN){
          let toast = this.toastCtrl.create({
          message: pushMsg,
          duration: 3000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
          this.storage.set('1', pushMsg);
          // console.log('Dismissed toast');
          this.msgList.push({id:4, "msg":pushMsg})
        });

        toast.present();
      }
    }
}

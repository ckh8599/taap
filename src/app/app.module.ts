import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { AlertController, Nav, Platform, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CodePage } from '../pages/code/code';
import { WebViewPage } from '../pages/webview/webview';
import { ConfigPage } from '../pages/config/config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser} from '@ionic-native/in-app-browser';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
// import { Deploy } from '@ionic/cloud-angular';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CodePage,
    WebViewPage,
    ConfigPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CodePage,
    WebViewPage,
    ConfigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Push
  ]
})
export class AppModule {
  // constructor(public deploy: Deploy) {}
}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/*import { Device } from '@ionic-native/device';*/
import { HttpModule } from '@angular/http';

//paginas
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { RegistrarPage } from '../pages/registrar/registrar';
import { InvitadoPage } from '../pages/invitado/invitado';

//providers


//firebase
import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { FIREBASE_CONFIG } from './app.firebase.config';

firebase.initializeApp(FIREBASE_CONFIG);

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicioProvider } from '../providers/servicio/servicio';
//aqui es donde hacemos todas las importaciones


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    InvitadoPage,
    RegistrarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    InvitadoPage,
    RegistrarPage
  ],
  providers: [
    StatusBar,//aqui van todos los plugins y servicios separados por ,
    SplashScreen,InAppBrowser,AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicioProvider
  ]
})
export class AppModule {}

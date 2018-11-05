import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';


//paginas
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { RegistrarPage } from '../pages/registrar/registrar';

//providers
import { ServicioProvider } from '../providers/servicio/servicio';

//firebase
import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { ServicioFirebaseProvider } from '../providers/servicio-firebase/servicio-firebase';

firebase.initializeApp(FIREBASE_CONFIG);

//aqui es donde hacemos todas las importaciones


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
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

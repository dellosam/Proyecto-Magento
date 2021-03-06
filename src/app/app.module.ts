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
import { TabsPage } from '../pages/tabs/tabs';
import {TabscarritoPage} from '../pages/tabscarrito/tabscarrito';
import {TabsayudaPage} from '../pages/tabsayuda/tabsayuda';
import {TabscuentaPage} from '../pages/tabscuenta/tabscuenta';
import {TabsfavoritosPage} from '../pages/tabsfavoritos/tabsfavoritos';
import {TabsinicioPage} from '../pages/tabsinicio/tabsinicio';

import {IonicStorageModule} from '@ionic/storage'


//providers
import { ServicioProvider } from '../providers/servicio/servicio';
import { SQLite} from '@ionic-native/sqlite';
import { BbddServiceProvider} from '../providers/bbdd-service/bbdd-service';
import {StorageProvider} from '../providers/storage/storage';


//firebase
import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';//este gentiona los usuarios crear, elimina, edita bloquea etc
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
    RegistrarPage,
    TabsayudaPage, 
    TabscarritoPage,
    TabscuentaPage,
    TabsfavoritosPage,
    TabsinicioPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    RegistrarPage,
    TabsayudaPage, 
    TabscarritoPage,
    TabscuentaPage,
    TabsfavoritosPage,
    TabsinicioPage,
    TabsPage
  ],
  providers: [
    StatusBar,//aqui van todos los plugins y servicios separados por ,
    SplashScreen,InAppBrowser,AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicioProvider, ServicioFirebaseProvider, Device, SQLite, BbddServiceProvider,
    StorageProvider 
    
  ]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//paginas
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { RegistrarPage } from '../pages/registrar/registrar';
import { InvitadoPage } from '../pages/invitado/invitado';

//firebase
import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { FIREBASE_CONFIG } from './app.firebase.config';

firebase.initializeApp(FIREBASE_CONFIG);
/*
    voy a ingresar un comando para crear una nueva pagina llamada login
    
    bien despues de generar las paginas tenemos que importarlas a este docuimento
    si no lo hacemos nos dara error
    
    ahi va el nombre exacto de la clase si no es igual no funcionara
    lo de conectar con el boton?
    ya vamos para eso pero antes toda importacion tiene que pasar po lo siguiente
    
    en el pcaso nada mas de las paginas .. haces esto
    si quieres completas la importacion
    
    vamos a conectar con el boton ahora
    
    
    ah diferencia de las paginas los plugins y servicios que crees van 
    en la seccion de providersa?
cual es la seccion providers.? arriba?
me capichi?afirmativoXD

duda?ño.X AunquE LE HADBIA PUESTO antes para q se abriera una ventana al darle a ese bootonjjee
si eso seria lo idea pero este plugin no funciona asi la tablet tienes los driver aaqui?
para que entre como dupuracion usb?ño
, no tengo cable, recuerdo hace años cuando la usaba para correr la app de android q tuve q instalarle unos drivers pero esta es otra pc de paso

tienes que instalar un programa que se lla ADB Android 

te presto un cable?
deja ver si unas primas tienen
*/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

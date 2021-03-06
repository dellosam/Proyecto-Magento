import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import 'rxjs/add/operator/map';  
import {Storage} from '@ionic/storage';
import { BbddServiceProvider} from '../providers/bbdd-service/bbdd-service';
import { StorageProvider } from '../providers/storage/storage';
import { EmailAuthProvider } from '@firebase/auth-types';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  
  rootPage:any = HomePage;

  data = {
    usuario : 'admin@telocomproenusa.com',
    password : 'telocomproenusa'
  }
/*
  private createDatabase(){
    this.SQLite.create({
      name: 'datos.db',
      location: 'default' 
    })
    .then((db) => {
      console.log(db);
    })
    .catch(error =>{
      console.error(error);
    });
  }*/


//esto es lo primero que se ejecuta en cualquier app de ionic
//si quieres hacer algo antes de cargar cualquier componente de un app en ionic
//lo haces en este constructor
// por ejemplo el SplashScreep es el responsabel de aparcer ese circulito que ves
//cuando inicias una app en ionic sabes?este ese señor es este
// ahora el plugin importante que verifica cuando una app ya esta corriendo es este
//con el metodo ready el dice .. ya al app corrio si probelma ejecuta todo lo que 
//tengo ene le bloque este then dice que se ejecuto con exito ..
//el proposito de esto es saber donde vamos a meter el linea de codigo
//si lo metoemos afuera va a dar error
//ahora voy a importar la librearia de firebase para la autenticacion de usuario
//para logear al usuario que creamos y asi tengamos acceso a la db



  /*dbExiste*/
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public autenticacion : AngularFireAuth, /*private SQLite: SQLite, */storage: Storage, 
    private services_db: BbddServiceProvider, private storageProvider: StorageProvider ) {
    platform.ready().then(() => {
    //logear a usuarios con email y password
    //las promesas son metodos de funciones que se retornan si se ejcuto bien o mal
    //ahi especifico si se ejecuta bien ejecuta loq ue esta dentro de este bloque
      this.autenticacion.auth.signInWithEmailAndPassword(this.data.usuario,this.data.password).then(data=>{
          console.log('Usuario logado');
          console.log(data);
        
      
    }).catch(err=>{
      console.log('error de usuario');
      console.log(err);
        });
        
       


     //BbddServiceProvider.initDatabase();
      statusBar.styleDefault();
      splashScreen.hide();
      
      



    });

  }
}

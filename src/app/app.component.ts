import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import 'rxjs/add/operator/map';  
import {Storage} from '@ionic/storage';
import { BbddServiceProvider} from '../providers/bbdd-service/bbdd-service';




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
    private services_db: BbddServiceProvider ) {
    platform.ready().then(() => {
    //logear a usuarios con email y password continuemos prof jaja siva
    //las promesas son metodos de funciones que se retornan si se ejcuto bien o mal
    //ahi especifico si se ejecuta bien ejecuta loq ue esta dentro de este bloque
      this.autenticacion.auth.signInWithEmailAndPassword(this.data.usuario,this.data.password).then(data=>{
          console.log('Usuario logado');
          console.log(data);
      
          storage.get ("dbExists")
          .then(data=>{//esto es una promesa si esta promesa se ejecuta es porque la consutal salio bien y consigo trae la informacion de dicha variable que se pregunto de storage.get
            //si data tiene informacion es porque la vairbale existe si no tiene es porque no existe
              if(data==null){//si data es igual a null es porque la variable no se creo 
                  alert("No existe variable");
                  storage.set("dbExists","1")//el crea como lo se .. porque dice set set es mandar info
                   .then (data=>{
                      alert("Variable Añadida");
                      //eso pasara cuando la db no existe aqui es donde crearemos la db junto con la
                      this.services_db.iniciarDb();
  
                   })
  
              }else{
                alert("Existe variable");//cuando ya entra por segunda vez despues de instalar la app saldra este mensaje que ya existe la variablecap
               // this.dbExiste = data;//si no entonces la variable si existe y se almacena es la variable global que creaste
  
              }
          })
   
          
          
          
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

import{Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
//import { IonicPage, NavController,  NavParams } from 'ionic-angular';
import {LoginPage} from '../../pages/login/login'
import { identifierModuleUrl } from '@angular/compiler';


@Injectable()
export class StorageProvider {

  //datoslogin : string = "../pages/LoginPage/L";
  constructor(/*public navCtrl: NavController,*/
              private storage : Storage,
              //public navParams: NavParams
             /* private StorageProvider: StorageProvider*/) {
  }
  
  crearUsuario(){
  
  }
  
  consultarUsuario(){

  }

  eliminarUsuario(){

  }
  //te vas guiando poco a poco tienes que entender cada linea de codigo
  //no t entiendo a ti, q quieres q haga xD
  /**
   * vamos a usar el plugin storage para almacenar el nombre de usuari
   * y constraña del cliente que quiera guardar sus credenciales
   * ese plugin tenemos que crear estas funciones y programarlas
   * para lugar llamarla en las paginas
   * mi objetivo con loque esta comentado abajo es una guia para 
   * usarlo en las funciones que se crearon
   
   * debemos implmentar esas funciones de home y login
   * recuerda que el app.compnente no tiene nada que ver con ellos
   * solo es una rchivo que carga todo y se ejecuta mucho antes de que todo pase
   * dudosa?
   * no se por donde empoezar
   * primero vamos a hacer la funcion crear
   
   */
  /**
   *  storage.get ("dbExists")
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

   */

}

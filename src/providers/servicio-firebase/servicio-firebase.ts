import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated'; //hacemos la importacion de esta libreria 
                                                                        //de firebase AngularFireDatabase -> para gestionar las consultas CRUD
                                                                        //FirebaseListObservable -> es el que recibe las consultas de la db para parsearlas y obtener la informacion
import { Device } from '@ionic-native/device';//luego de importarlo en app.module lo inyectamos a este documento                                                                        
import 'rsjx/add/'                                                                        
@Injectable() 
export class ServicioFirebaseProvider {

  /**
   * en esta linea estamos creando una variable de tipo FirebaseListObservable el cual sera la variale que recibira la consulta de la inyeccion db
   * lo creamos como un arregle de tipo any
   * any es un tipo de dato generico el cual se especifica que puede recibir cualquier tipo de datos u objeto
   */
  adapater : FirebaseListObservable<any>;


  //declaramos la estructura de datos o cargada de datos (payload)
  payload = {
    uid : '',
    plataforma : '',
    version : '',
    fabricanete : '',
    serial : ''
  }

  //como aqui no vamos a realizar ninguna peticion http borramos la importacion y la inyeccion http
  //hacemos la inyeccion del AngularFireDatabase
  constructor(private db : AngularFireDatabase, private dispositivo: Device) {
    
  }

  //como ya tenemos ya las consultas armadas vamos a instalar un plugin para extraer informacion del dispoisitivo
  //ese plugin es llamado device -> documentacion oficial en la pagina de ionicframework en la pestaña API Native

  //comandos de instalacion
  //->ionic cordova plugin add cordova-plugin-device
  //->npm install --save @ionic-native/device
  //luego de instalar nos vamos al archiov app.module para importarlo

  /**
   * la informacion que vamos a recolectar del dispositivo atraves del este plugin sera el siguiente
   
   METODO         |  FUNCION DEL METODO

    platform      :  Obtenga el nombre del sistema operativo del dispositivo.

    uuid          :  Obtenga el identificador único universal (UUID) del dispositivo.

    version       :  Obtén la versión del sistema operativo.
    
    manufacturer  :  Obtener el fabricante del dispositivo.

    serial        :  Obtenga el número de serie del hardware del dispositivo.

   */

   /**
    * una vez que sabemos que datos vamos a insertar en el esquema de datos preparamos el
    * payload(carga de datos) -> estructura de datos para registrar el dispositivo
    * esto lo vamos a 
    */

  
    
  RegistrarDispositivo(){
    this.db.list('').push({}).then(response => {

    })
  }

  ListaDispositivos(){
    this.adapater = this.db.list('');
    this.adapater.subscribe(res=>{
      res.m
    })
  }

  ActulizarDispositivos(){
    this.db.database.ref('').set({})
    .then(response =>{

    })
    .catch(err=>{

    })
  }

  eliminarDispositivos(){

  }

}

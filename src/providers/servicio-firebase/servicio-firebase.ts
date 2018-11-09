import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated'; //hacemos la importacion de esta libreria 
                                                                        //de firebase AngularFireDatabase -> para gestionar las consultas CRUD
                                                                        //FirebaseListObservable -> es el que recibe las consultas de la db para parsearlas y obtener la informacion
import { Device } from '@ionic-native/device';//luego de importarlo en app.module lo inyectamos a este documento                                                                        
import 'rxjs/add/operator/map';                                                                        
@Injectable() 
export class ServicioFirebaseProvider {

  /**
   * en esta linea estamos creando una variable de tipo FirebaseListObservable el cual sera la variale que recibira la consulta de la inyeccion db
   * lo creamos como un arregle de tipo any
   * any es un tipo de dato generico el cual se especifica que puede recibir cualquier tipo de datos u objeto
   */
  adapter : FirebaseListObservable<any>; 
  //adapter ... ese nombre puede cambiar  como lo quieras poner
  //su funcion es recibir la consulta de firbease 
  //para enlistar lo//no acabamos de borrar su lib?
  //no esa libreria me imagino que salio de causlidad
  //pero su libreria es esta


  //declaramos la estructura de datos o cargada de datos (payload)
  payload = {
    uid : '',
    plataforma : '',
    version : '',
    fabricante : '',
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

  //vamos a cear una funcion para cargar el payload con la informacion que requiere
/**
 * aqui logramos cargar esta funcion
 * ahora que vengo viendo hay un detallaso
 * el plugin device solo funciona con un dispositivo XD
 * para hacer las pruebas vamos a estar fallos a menos que usemos 
 * datos falsos
 * vamos a crear otra funcion similar 
 * con datos falsos sin usar el device.
 */

  cargarDatos(){
    this.payload.uid = this.dispositivo.uuid.toString();//llamo a su metodo uuid para obtener el indentificador unico del dispositivo es como la direccion MAC de una pc-no sbia q podia obtener eso q bn sii XD 
    this.payload.plataforma = this.dispositivo.platform.toString();
    this.payload.serial = this.dispositivo.serial.toString();
    this.payload.version = this.dispositivo.version.toString();
    this.payload.fabricante = this.dispositivo.manufacturer.toString();
  } 
  //listo
//ve abriendo firebase con el correo que se creo .. contraseña cana*4742 te acuerdas del correo?debe estar alli guardado che,ve crreeo q lo guarde en la tablet tmbn (y) 
  /*cargarDatos_Temp(){ //dame un chance dejame ver cual es el uuiis s de mi tlfokis si va
    this.payload.uid = 'c46cc1e459a59657';
    this.payload.plataforma = 'android';
    this.payload.serial = '123456';
    this.payload.version = '7.0';
    this.payload.fabricante = 'samsung';
  } */
    
  //ya tenemos el usuario listo ahora vamos al registro del deipositivo
  //ahora vamos a llamar a este servicio
  RegistrarDispositivo(){
    this.cargarDatos();//llamamos a la funcion para que cargue el payload
    //pasamos el payload al metodo push(empujar) para que se cargue en el esquema de datos
       //aun que esta promeesa no posee catch
    //db es el alias del plugin para la base de datos 
    //list para enlitar o estructurar los datos
    //push para empujar los datos a la estructura
        
    this.db.list('/dispositivos/datos/').push(this.payload).then(response => {
      console.log(response);
    })
  }

  ListaDispositivos(){
    this.adapter = this.db.list('/dispositivos/datos/');
    this.adapter.subscribe(res=>{
      //vamos a parsear la respuesta para que lo convierta en un json
      //duda sobre... 
      //aqui funcionaria asi..al registrarme e dira de que dispositivo me registre...
      //eso tambien se lo pondria al login? creo q ayer hablamso eso
      //pero no recuerdo
      // la funcion de registrar.. solo funcionara en registrar 
      //cada vez que ingrese un nuevo usuario
      //como freddy aun no ha dado los parametros para eso
      //lo dejamos como esta para las pruebas 
      //ahora lo que te estoy enseñado es a consultar los datos de firebase
      //para que lo puedas usar luego cuando lo veas convenienteokok prfe
      res.map(data=>{
        console.log(data);
      })
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

/**
 * la carpeta app
 * ella contiene una seria de script (ts) que hacen una funcion
 * como sabes cuando creas un proyecto desde cero esos documentos vienen ya definido
 * el app.module ella contiene la importacion de todos los recursos plugin, servicios pagin
 * del proyecto
 * 
 * app.component.ts
 * es el primero documento que se ejcuta al iniciar cualquier aplicacion de ionic
 * 
 * app.component.html
 * app.component.css
 * esos dos diggamos que ahi puedes incorporar una vista generar en cualquier pagina
 * de ionic por ejemplo
 * los menu laterales
 * bien ahora donde vamos a hacer lo que vamos hacer XD
 * 
 */
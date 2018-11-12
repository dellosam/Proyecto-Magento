import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioProvider } from '../../providers/servicio/servicio';
import {TabsPage} from '../tabs/tabs'; 
import { AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BbddServiceProvider} from '../../providers/bbdd-service/bbdd-service';
import {StorageProvider} from '../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
      
  data = {
    user : '',
    pass : ''
  }
    user;

  valida = false;//
  constructor(public navCtrl: NavController, 
              public parametros: NavParams,
              private servicio: ServicioProvider,
              public alertCtrl: AlertController, 
              public inappBrowser: InAppBrowser, 
              private database: BbddServiceProvider,
              private StorageProvider: StorageProvider
              /*,private sqlite: SQLite*/
              ) 
   {
  }
  ionViewDidLoad() {
    //this.GetAllUser();
    this.StorageProvider.consultarUsuario();
  }

/*

  CreateUser(){
    this.database.CreateUser(this.data.user, this.data.pass).then((data)=>{
     console.log(data);
    }, (error)=>{
      console.log(error);

    })
  }

  GetAllUser(){
    this.database.GetAllUsers().then((data)=>{
      console.log(data);
      alert('consulta '+data);
    }, (error)=>{
      alert('error 2');
      console.log(error);
    })


  }*/

//sabesque hace esta funcion?ya te iba a preguntar eso xD
//esa funcion forma parte del ciclo de vida de una pagina
//ya te muestro mejor
  
 //cappcihi?creo q shi...en el coigo anterior yo andaba creando otro usuario y pasandole data creo xD
 //solo falta que valides si el usuario quiere o no guardar credenciales
 /**
  * falta un check al login que diga
  * desea guardar credenciales [che]ckuncheck? el cuadrito q marcas?si
  * dime?
  * en la pagina de ionic en la paste de component sale 
  * check y hay sale como programarlos
  * 
  * pense q seria algo como que al darle iniciar sesion, se abra una ventana q diga, deseas guar
  * tus datos o algo asi? y
  *  si le da en aceotar ok. guarde sino no?
  * si pero lo mas compun y como freddy lo va aquerer en con un check
  * que sea opcional y no le muestre ese mensaje al usuario cada vez que quiera ingrear
  * ummm interesante
  */ 
 IniciarSesion(){
    if(this.validarCampos()){
      this.servicio.IniciarSesion(this.data.user, this.data.pass).subscribe(res=>{
        if(res.json()){
          //esta sentencio se ejecuta si el usuario ingreso las contraseñas correctas verdad
          if(this.valida){
           // this.CreateUser();
          }else{
           
          }
          
          this.inappBrowser.create('https://telocomproenusa.com/ve/ionic_login_page.php?email='+this.data.user+'&password='+this.data.pass,'_blank','location=no,toolbar=no')
          this.navCtrl.push(TabsPage);
        }else{
          this.mostrarAlerta('Error de credenciales','Usuario o Clave incorrectos')
        }
      });
    }
  }

  mostrarAlerta(titulo, msj) {
    const alert = this.alertCtrl.create({
      title: titulo, 
      subTitle: msj,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  validarCampos(){
    let valido = false;
    if(this.data.user.length != 0){
      if(this.data.pass.length != 0){
        valido = true;
      }else{
        this.mostrarAlerta('Error de Credenciales','El campo Password esta vacio');
      }
    }else{
      this.mostrarAlerta('Error de Credenciales','El campo Usuario esta vacio');
    }
    return valido;
  }


}
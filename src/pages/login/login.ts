import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioProvider } from '../../providers/servicio/servicio';
import {TabsPage} from '../tabs/tabs'; 
import { AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
      
  data = {
    user : '',
    pass : ''
  };

  constructor(public navCtrl: NavController, public parametros: NavParams,
    private servicio: ServicioProvider, public alertCtrl: AlertController, public inappBrowser: InAppBrowser, private storage: Storage) {
  }

  ionViewDidLoad() {
  
  }
 
  IniciarSesion(){
        if(this.validarCampos()){
          this.servicio.IniciarSesion(this.data.user, this.data.pass).subscribe(res=>{
            if(res.json()){
              this.inappBrowser.create('https://telocomproenusa.com/ve/ionic_login_page.php?email='+this.data.user+'&password='+this.data.pass+'','_blank','location=no,toolbar=no')
              this.navCtrl.push(TabsPage);
              window.localStorage.setItem('usuario',this.data.user);
              window.localStorage.setItem('clave', this.data.pass);
              console.log(window.localStorage.getItem('usuario'));
              console.log(window.localStorage.getItem('clave')); 
            }else{
              this.mostrarAlerta('Error de credenciales','Usuario o Clave incorrectos')
            }
          });
        }
  }
  Inicio(){
    this.storage.get('usuario').then((resul) => {
      if(resul){
      this.inappBrowser.create('https://telocomproenusa.com/ve/ionic_login_page.php?email='+window.localStorage.getItem('usuario')+'&password='+window.localStorage.getItem('usuario')+'','_blank','location=no,toolbar=no')
  }}); 
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
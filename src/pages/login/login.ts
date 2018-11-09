import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioProvider } from '../../providers/servicio/servicio';
import {TabsPage} from '../tabs/tabs'; 
import { AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


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

  constructor(public navCtrl: NavController, public parametros: NavParams,
    private servicio: ServicioProvider, public alertCtrl: AlertController, public inappBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
  
  }
 
  IniciarSesion(){
    if(this.validarCampos()){
      this.servicio.IniciarSesion(this.data.user, this.data.pass).subscribe(res=>{
        if(res.json()){
          this.inappBrowser.create('https://telocomproenusa.com/ve/ionic_login_page.php?email=eamonfq@gmail.com&password=warcraft','_blank','location=no,toolbar=no')
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
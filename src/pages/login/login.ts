import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioProvider } from '../../providers/servicio/servicio';
import {MenuPage} from '../menu/menu'; 
import { AlertController } from 'ionic-angular';


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
    private servicio: ServicioProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  
  }
  
  IniciarSesion(){
    if(this.validarCampos()){
      this.servicio.IniciarSesion(this.data.user, this.data.pass).subscribe(res=>{
        if(res.json()){
          this.navCtrl.push(MenuPage);
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
        this.mostrarAlerta('Error de Campo','El campo Password esta vacio');
      }
    }else{
      this.mostrarAlerta('Error de Campo','El campo Usuario esta vacio');
    }
    return valido;
  }
}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { RegistrarPage } from '../../pages/registrar/registrar';
import { InvitadoPage } from '../../pages/invitado/invitado';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    saludo = 'hola desde la pagina home'
  constructor(private navCtrl: NavController, private inappBrowser: InAppBrowser) {

  }
  //primero importas las paginas a las que quieres navegar
  //esta funcion la dejas de referencia
  onPageLogin(){
    this.navCtrl.push(LoginPage,{_saludo : this.saludo});
    console.log('Login'); 
  }
  
  onPageInvitado(){
    this.inappBrowser.create('https://telocomproenusa.com/ve/','_blank', 'location = no')
    
  }
  
  
  onPageRegistrar(){
    this.navCtrl.push(RegistrarPage);
    console.log('Registrar');
  }
  


}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { RegistrarPage } from '../../pages/registrar/registrar';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
  constructor(private navCtrl: NavController, private inappBrowser: InAppBrowser) {

  }
  //primero importas las paginas a las que quieres navegar
  //esta funcion la dejas de referencia
  onPageLogin(){
    this.navCtrl.push(LoginPage);
  }
  
  onPageInvitado(){
    this.inappBrowser.create('https://telocomproenusa.com/ve/','_blank','location=no,toolbar=no')
  }
  
  
  onPageRegistrar(){
    this.navCtrl.push(RegistrarPage);
  }
  


}

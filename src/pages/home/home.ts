import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { RegistrarPage } from '../../pages/registrar/registrar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Query } from '@firebase/database';
Query
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
  constructor(private navCtrl: NavController, private inappBrowser: InAppBrowser) {
      
  }
  //lo quieres hacer?pero no entiendo q se hara
  
  //primero importas las paginas a las que quieres navegar
  //esta funcion la dejas de referencia
  onPageLogin(){
    this.navCtrl.push(LoginPage);
  }
  
  onPageInvitado(){
    this.inappBrowser.create('https://telocomproenusa.com/ve/','_blank','location=no,toolbar=no')
  }//cambiar aqui el link y pasarle?
  /**
   * lo que vamos hacer es abrir la pagina 
   * tal cual como esta en esa funcion
   * pero en la pagina de login al iniciar sesion ok
   */
  
  
  onPageRegistrar(){
    this.navCtrl.push(RegistrarPage);
  }
  


}

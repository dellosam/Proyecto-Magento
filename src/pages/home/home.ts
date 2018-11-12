import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { RegistrarPage } from '../../pages/registrar/registrar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Query } from '@firebase/database';
import {StorageProvider} from '../../providers/storage/storage';
Query
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController, private inappBrowser: InAppBrowser,private StorageProvider: StorageProvider) {
      
  }
  //lo quieres hacer?pero no entiendo q se hara
  
  //primero importas las paginas a las que quieres navegar
  //esta funcion la dejas de referencia
  onPageLogin(){
    if (this.StorageProvider.EMAIL != null)
    {
      this.inappBrowser.create('https://telocomproenusa.com/ve/ionic_login_page.php?email='+this.StorageProvider.EMAIL+'&password='+this.StorageProvider.clave+'','_blank','location=no,toolbar=no')
    }else{
      this.navCtrl.push(LoginPage);
    }
  }
  
  onPageInvitado(){
    this.inappBrowser.create('https://telocomproenusa.com/ve/','_blank','location=no,toolbar=no')
  }
  
  onPageRegistrar(){
    this.navCtrl.push(RegistrarPage);
  }
  


}

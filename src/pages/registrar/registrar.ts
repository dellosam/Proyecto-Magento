import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})

export class RegistrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
//console.log solo es para mostrar informacion en la consola del navegador
//a nivel de desarrollo de app no es neecesariosolo es una guia 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
    
  }

}

//sii si solo quieres dirigirte a otra pagina si .. pero hay un detalle que te falto pero ejecuta y te daras cuenta
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//recomendacion primero ubicar la ruta y vsc te ayuda con lo demas 
import {ServicioFirebaseProvider} from '../../providers/servicio-firebase/servicio-firebase'
//si quieres importa el servicio
//inyectalo y llamas a la funcion registrar en la funcion 

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})

/**
 * la inyeccion en ionic o angular es como instanciar un objeto en POO
 * obj = new Objeto();
 * obj.metodo();
 */
export class RegistrarPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private servicio: ServicioFirebaseProvider) {
  }

  ionViewDidLoad() {
    this.servicio.RegistrarDispositivo();// ahora prueba
    //aqui para hacer pruebasR el nombre que quieras 
    this.servicio.ListaDispositivos();
    //practica .. llama al metodo listadispistivo aqui
  }

}
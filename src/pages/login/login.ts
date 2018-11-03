import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    
    //NavParams permite recuperar esa informacion que mandamos de otra pagina
        //el nombre de su alias esta ahi navParams lo puedes cambiar si quieres //no borres los coments de saviaqui //si vajaja
        
        /*aqui no, esto es login lo que pasa es que cuando el InAppBrowser abre el navegador de cordova
        cuando accionas el botonno lo abre en una pagina me imagino que en el boton invitados
        sera asi, no?
        estas?sisya vi q s jaja------en el modulo q estan pesando a la gente, si pesas menos de lo q debes segun y q daran una bolsa disque modulo de informatica?..modulo de la plazoleta
        jajajaja me estas diciendo flaquito?nah si no yo tmbn estuvieraalla..pero mi mama si se fue y robert y eliannis creo.. yo tengo comida aqui me da lala salir.ok camarada ajaja
        voy a escuchar el audio de freedy ppara ver como es la cuestion se me perdio el audiovoy. te escribi por wss
        bien ... vamos ahcer esto rapitido porque tengo que terminar una app
        */
        //aqui inyectamos el plugin ua va me confundi aqui no va CD
  constructor(public navCtrl: NavController, public parametros: NavParams) {
  }
  
  
  //este metodo ionViewDibLoad es uno de los ciclos de vida de la pagina
  //hay como 5 metodos
  // un se ejecuta antes de cargar la pagina
  // otro de ejecuta despues de cargar los componentes de la pagina
  // otro antes de salir de la pagina 
  // otro cuando ya la pagina se salio
  
  //este se ejecuta despues de que los componentes se cargan
  
  //quieres practicar con las otras paginas?
  //o quieres hacer el login con los inputs?las otras paginas porque siento q me perdere
  //vale yo te voy viendo cualquier duda comentas, yava por donde comienzo?jaja
  //en las funciones de home las que cree
  //borralas y creas la tuyas con un nombre que quieras 
  //y haces lo de del navCtrl para que conectes los botones a las otras paginas, qie borre que?las paginas?
  //las funciones
 
 
    ionViewDidLoad() {
    
    //en typescript es obligatorio el this. para llamar a cualquier objeto o variable
    //si no lo haces te marca error
    
    //parametros.get('_saludo') esa variable tiene que ser igual al alias que le colocamos en home
    console.log(this.parametros.get('_saludo'));
  }

}

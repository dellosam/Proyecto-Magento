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
    //NavParams permite recuperar esa informacion que mandamos de otra pagina
    
    //siempre tienes que especificar el encapsulamiento
     //private public protected ..
     constructor(public navCtrl: NavController, public parametros: NavParams,
      private servicio: ServicioProvider, public alertCtrl: AlertController) {
}
IniciarSesion(){
  //true
      if(this.validarCampos()){
        this.servicio.IniciarSesion(this.data.user, this.data.pass).subscribe(res=>{
          // res es una variable...en este caso se utiliza por "respuesta"
          //hace la consulta la obtengo con subscribe el cual llamo a la promesa
          //res y lo transformo a json para que solo me diga true o false
          //como lo programo freddy, retorna true
          console.log(res.json())
          if(res.json()){
              //pasa al menu
              this.navCtrl.push(MenuPage);
            
          }else{
            //si no muestra este mensaje 
            
            this.mostrarAlerta('Error de credenciales','Usuario o Clave incorrectos')
          }
          
        });//se ejecuta esto
      }
    }
  
    mostrarAlerta(titulo, msj) {
      const alert = this.alertCtrl.create({
        title: titulo, //title de la alerta
        subTitle: msj,//mensaje de la laerta
        buttons: ['Aceptar']//nombre del boton de la alerta
      });
      alert.present();
    }
  
    
    validarCampos(){
      let valido = false;//
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
    
    //este metodo ionViewDibLoad es uno de los ciclos de vida de la pagina
    //hay como 5 metodos
    // un se ejecuta antes de cargar la pagina
    // otro de ejecuta despues de cargar los componentes de la pagina
    // otro antes de salir de la pagina 
    // otro cuando ya la pagina se salio
    
    //este se ejecuta despues de que los componentes se cargan
    
    
      ionViewDidLoad() {
      
      //en typescript es obligatorio el this. para llamar a cualquier objeto o variable
      //si no lo haces te marca error
      
      
      console.log(this.parametros.get('_saludo'));
    }
  
  }
  
  
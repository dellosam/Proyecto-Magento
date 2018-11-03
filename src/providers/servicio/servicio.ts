import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
   bien lo de rxjs es para parsear json con javascript como tambien xml
  su funciona se llama map, lo que hice fue importar el map para poder usarlo
  en este momento no es necesario pero 
  por posteriormente si
 */
@Injectable()
export class ServicioProvider {

  constructor(public http: Http) {
    
  }

  IniciarSesion(user, pass){
    return this.http.get('https://telocomproenusa.com/ve/ionic_login.php?email='+
                          user+'&password='+pass);
  }

}

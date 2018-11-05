import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicioProvider {

  constructor(public http: Http) {
    
  }

  IniciarSesion(user, pass){
    return this.http.get('https://telocomproenusa.com/ve/ionic_login.php?email='+
                          user+'&password='+pass);
  }

}

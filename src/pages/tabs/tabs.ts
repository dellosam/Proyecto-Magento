import { Component } from '@angular/core';
import {TabsayudaPage} from '../tabsayuda/tabsayuda';
import {TabscarritoPage} from '../tabscarrito/tabscarrito';
import {TabscuentaPage} from '../tabscuenta/tabscuenta';
import {TabsfavoritosPage} from '../tabsfavoritos/tabsfavoritos';
import {TabsinicioPage} from '../tabsinicio/tabsinicio';



//importa las 5 paginas y asegurate que esas 5 apginas estambien esten en el app.module
//tarea cumplida? sisa
//copmo hiciste eso? B! jajaja
//alt + click
@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

    tabRoot1 = TabsinicioPage;
    tabRoot2 = TabsayudaPage;
    tabRoot3 = TabsfavoritosPage;
    tabRoot4 = TabscuentaPage;
    tabRoot5 = TabscarritoPage;


  constructor() {
  }

}

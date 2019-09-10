import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transparencia',
  templateUrl: './transparencia.component.html',
  styles: []
})
export class TransparenciaComponent implements OnInit {

  public cardsTransparencia = [{
      titulo: 'OBRAS PÚBLICAS',
      img: './assets/images/stock/obras.png',
      url: 'obras'
    }, {
      titulo: 'CATASTRO MUNICIPAL',
      img: './assets/images/stock/agave.png',
      url: 'catastro'
    }, {
      titulo: 'INSTITUTO MUJER',
      img: './assets/images/stock/mujer.png',
      url: 'mujer'
    }, {
      titulo: 'CULTURA Y DEPORTE',
      img: './assets/images/stock/cultura.png',
      url: 'cultura'
    }, {
      titulo: 'INSTITUTO JUVENTUD',
      img: './assets/images/stock/juventud.png',
      url: 'juventud'
    }, {
      titulo: 'SEGURIDAD PÚBLICA',
      img: './assets/images/stock/seguridad.png',
      url: 'seguridad'
    }, {
      titulo: 'FINANZAS PÚBLICAS',
      img: './assets/images/stock/calculadora.png',
      url: 'finanzas'
    }, {
      titulo: 'AGRICULTURA Y GANADERÍA',
      img: './assets/images/stock/vaca.png',
      url: 'agricultura'
  }];

  constructor() { }

  ngOnInit() {
  }

}

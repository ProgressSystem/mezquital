import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alcaldia',
  templateUrl: './alcaldia.component.html',
  styles: []
})
export class AlcaldiaComponent implements OnInit {

  public gabinete = [{
      cargo: 'PRESIDENTE MUNICIPAL',
      nombre: 'PROF. RAMIRO MENDOZA SOLIS'
    },{
      cargo: 'SECRETARIO DE H. AYUNTAMIENTO',
      nombre: 'Profr. Ventura Adame Aguilar'
    },{
      cargo: 'TESORERIA',
      nombre: 'Ing. Ismael Montiel Flores'
    },{
      cargo: 'CONTRALORIA MUNICIPAL',
      nombre: 'Profr. Mariano Soto Caldera'
    },{
      cargo: 'DIR. RECURSOS HUMANOS',
      nombre: 'Profra. Jessica Daniela Rodríguez Moreno'
    },{
      cargo: 'DIR. OBRAS PÚBLICAS',
      nombre: 'Ing. Miguel Ángel Tamayo Vela'
    },{
      cargo: 'DIR. PLANEACIÓN',
      nombre: 'Arq. Nahúm Eli Quiñones Ortiz'
    },{
      cargo: 'DIR. DESARROLLO SOCIAL',
      nombre: 'Profr. Juan Emidio Gurrola Mendía'
    },{
      cargo: 'DIR. DESARROLLO RURAL',
      nombre: 'Profr. Silvino Aguilar Soto'
    },{
      cargo: 'UNIDAD DE TRANSPARENCIA',
      nombre: 'LAE. Neyma Dolores Muñoz Escalante'
    },{
      cargo: 'DIR. SERVICIOS PUBLICOS',
      nombre: 'C. Demecio Calleros Díaz'
    },{
      cargo: 'DIR. JURÍDICO ',
      nombre: 'Lic. Carlos Burciaga Rosales'
    },{
      cargo: 'DIR. REC. NATURALES Y MEDIO AMBIENTE',
      nombre: 'Profra. Francisca Ma. Del Carmen Flores Flores'
    },{
      cargo: 'DIR. SEGURIDAD PÚBLICA',
      nombre: 'C Francisco Javier Escamilla Torres.'
    },{
      cargo: 'DIR. SALUD',
      nombre: 'Profr. Abundio Ramírez'
    },{
      cargo: 'DIR. PROTECCIÓN CIVIL',
      nombre: 'LIC. Lorenzo Santana Santillán'
    },{
      cargo: 'INSTITUTO DE LA MUJER',
      nombre: 'C. Leticia Flores Soto'
    },{
      cargo: 'DIR. INSTITUTO DE LA JUVENTUD',
      nombre: 'Profra. Nely Citlaly Fernández Villa'
    },{
      cargo: 'DIR. CULTURA Y DEPORTE',
      nombre: 'C. Perfecto Ciriano Flores'
    },{
      cargo: 'DIR. ALBERGUE INDIGENA',
      nombre: 'Profr. Fermín Orozco Solís'
  }];

  constructor() { }

  ngOnInit() {
  }

}

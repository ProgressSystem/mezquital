import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  urlImages = [
    {
      img: './assets/images/fotografia/galeria/IMG_1445.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1446.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1447.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1448.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1449.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1450.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1463.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1464.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1465.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1466.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1467.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1468.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1470.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1471.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1472.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1473.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1474.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1475.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1476.JPG',
      titulo: ''
    }, {
      img: './assets/images/fotografia/galeria/IMG_1477.JPG',
      titulo: ''
    }
  ];

  constructor() { }

  getImages() {
    return this.urlImages;
  }
}

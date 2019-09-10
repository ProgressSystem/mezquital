import { Component, OnInit } from '@angular/core';

import { GaleriaService } from '../../services/galeria.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  constructor(private galeria: GaleriaService) { }

  ngOnInit() {
    var allImages = "";

    for (var i = 0; i < this.galeria.urlImages.length ; i++) {
      allImages += `<img src="${ this.galeria.urlImages[i].img }" alt="pretty kitty">`;
    }

    $('#photos').append(allImages);
  }

}

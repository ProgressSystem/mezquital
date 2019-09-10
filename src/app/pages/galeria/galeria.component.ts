import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../services/galeria.service';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {
  public galeriaImg = [];

  constructor(private galeria: GaleriaService) {
    this.galeriaImg = galeria.getImages();
  }

  ngOnInit() {
  }

  deleteImage(position: number) {
    console.log(position)
  }
}

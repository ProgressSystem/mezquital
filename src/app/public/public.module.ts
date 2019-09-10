import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULES
import { SharedModule } from '../shared/shared.module';

// ROUTER
import { PAGES_ROUTES } from './public.routes';

// COMPONENTS
import { PublicComponent } from './public.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { TurismoComponent } from './turismo/turismo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HistoriaComponent } from './historia/historia.component';
import { NuestroMunicipioComponent } from './nuestro-municipio/nuestro-municipio.component';
import { PashComponent } from './pash/pash.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ChildTransparenciaComponent } from './transparencia/child-transparencia/child-transparencia.component';
import { AlcaldiaComponent } from './alcaldia/alcaldia.component';
import { LgcgComponent } from './lgcg/lgcg.component';

@NgModule({
  declarations: [
    PublicComponent,
    NavbarComponent,
    LandingComponent,
    FooterComponent,
    TurismoComponent,
    HistoriaComponent,
    NuestroMunicipioComponent,
    PashComponent,
    TransparenciaComponent,
    GaleriaComponent,
    ChildTransparenciaComponent,
    AlcaldiaComponent,
    LgcgComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ]
})

export class PublicModule { }

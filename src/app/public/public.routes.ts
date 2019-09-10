import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LandingComponent } from './landing/landing.component';
import { TurismoComponent } from './turismo/turismo.component';
import { HistoriaComponent } from './historia/historia.component';
import { PashComponent } from './pash/pash.component';
import { NuestroMunicipioComponent } from './nuestro-municipio/nuestro-municipio.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ChildTransparenciaComponent } from './transparencia/child-transparencia/child-transparencia.component';
import { AlcaldiaComponent } from './alcaldia/alcaldia.component';
import { LgcgComponent } from './lgcg/lgcg.component';

const publicRoutes: Routes = [
  { path: '', component: PublicComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'turismo', component: TurismoComponent },
      { path: 'historia', component: HistoriaComponent },
      { path: 'nosotros', component: NuestroMunicipioComponent },
      { path: 'pash', component: PashComponent },
      { path: 'galeria', component: GaleriaComponent },
      { path: 'alcaldia', component: AlcaldiaComponent },
      { path: 'transparencia', component: TransparenciaComponent },
      { path: 'lgcg', component: LgcgComponent },
      { path: 'transparencia/:id', component: ChildTransparenciaComponent }
    ]
  },
  // { path: '**', pathMatch: 'full', redirectTo: '/principal' }
];

export const PAGES_ROUTES = RouterModule.forRoot(publicRoutes);

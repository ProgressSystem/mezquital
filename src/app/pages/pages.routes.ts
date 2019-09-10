import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PashComponent } from './pash/pash.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { LgcgComponent } from './lgcg/lgcg.component';
import { GaleriaComponent } from './galeria/galeria.component';

const pagesRoutes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: 'pash', component: PashComponent },
      { path: 'transparencia', component: TransparenciaComponent },
      { path: 'lgcg', component: LgcgComponent },
      { path: 'galeria', component: GaleriaComponent },
      { path: '', redirectTo: '/dashboard/pash', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

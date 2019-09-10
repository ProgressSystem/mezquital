import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ROUTES
import { PAGES_ROUTES } from './pages.routes';

// COMPONENTS
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import { PashComponent } from './pash/pash.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { LgcgComponent } from './lgcg/lgcg.component';


@NgModule({
    declarations: [
        ProgressComponent,
        PagesComponent,
        PashComponent,
        TransparenciaComponent,
        GaleriaComponent,
        LgcgComponent
    ],
    exports: [
        ProgressComponent,
        PagesComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        QuillModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}

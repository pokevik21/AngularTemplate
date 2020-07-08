import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Router
import { PagesRoutingModule } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { SharedModule } from '../shared/shared.module';
import { CompentsModule } from '../components/compents.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    CompentsModule,
    CommonModule
  ]


})
export class PagesModele { }

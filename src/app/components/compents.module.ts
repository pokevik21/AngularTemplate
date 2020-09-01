import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';



@NgModule({
  declarations: [
    GraficoDonaComponent,
    IncrementadorComponent,
    ModalImagenComponent,
  ],
  exports: [
    GraficoDonaComponent,
    IncrementadorComponent,
    ModalImagenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class CompentsModule { }

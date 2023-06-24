import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpliUNARoutingModule } from './simpli-una-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GeneradorDeHorariosComponent } from './pages/generador-de-horarios/generador-de-horarios.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaCursosRegistradosComponent } from './components/tabla-cursos-registrados/tabla-cursos-registrados.component';
import { TabViewHorariosGeneradosComponent } from './components/tab-view-horarios-generados/tab-view-horarios-generados.component';
import { TablaHorarioGeneradoComponent } from './components/tabla-horario-generado/tabla-horario-generado.component';


@NgModule({
  declarations: [
    InicioComponent,
    GeneradorDeHorariosComponent,
    TablaCursosRegistradosComponent,
    TabViewHorariosGeneradosComponent,
    TablaHorarioGeneradoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    SimpliUNARoutingModule,
  ]
})
export class SimpliUNAModule { }

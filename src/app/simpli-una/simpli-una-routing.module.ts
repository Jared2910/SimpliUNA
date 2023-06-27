import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GeneradorDeHorariosComponent } from './pages/generador-de-horarios/generador-de-horarios.component';

const routes: Routes = [

  {
    path: '',
    children:[
      {path:'inicio', component: InicioComponent},
      {path:'generadorDeHorario', component: GeneradorDeHorariosComponent},
      {path:'**', redirectTo: 'inicio'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpliUNARoutingModule { }

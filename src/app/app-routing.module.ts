import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[

  {
    path:'simpliUNA',
    loadChildren: ()=> import('./simpli-una/simpli-una.module').then(m => m.SimpliUNAModule)
  },
  {
    path: '**',
    redirectTo: 'simpliUNA'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

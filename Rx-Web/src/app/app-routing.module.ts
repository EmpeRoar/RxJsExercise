import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`../app/modules/catalog/catalog.module`).then(x => x.CatalogModule)
  },
  {
    path: 'samples',
    loadChildren: () => import(`../app/modules/samples/samples.module`).then(x => x.SamplesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

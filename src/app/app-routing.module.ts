import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/tree/d3',
    pathMatch: 'full'
  },
  {
    path: 'tree',
    loadChildren: () => import('./tree/tree.module').then(tree => tree.TreeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

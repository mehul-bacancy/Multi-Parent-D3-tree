import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { D3Component } from './d3/d3.component';
import { MultiParentD3Component } from './multi-parent-d3/multi-parent-d3.component';
import { VegaComponent } from './vega/vega.component';
import { RadialComponent } from './radial/radial.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {
    path:'',
    component: TreeComponent,
    children:[
      {
        path:'d3',
        component: D3Component
      },
      {
        path: '',
        redirectTo:'d3',
        pathMatch: 'full'
      },
      {
        path: 'vega',
        component: VegaComponent
      },
      {
        path: 'multi-parent-d3',
        component: MultiParentD3Component
      },
      {
        path: 'radial',
        component: RadialComponent
      }
    ]
  }
]

@NgModule({
  declarations: [TreeComponent, D3Component, MultiParentD3Component, VegaComponent, RadialComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TreeModule { }

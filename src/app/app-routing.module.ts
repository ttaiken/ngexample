import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductorComponent } from './views/productor/productor.component';
import { VMComponent } from './views/productor/vm/vm.component';
import { NetworkComponent } from './views/productor/network/network.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './views/comm/page-not-found/page-not-found.component';


const routes: Routes = [
  { 
    path: 'productor', 
    component: ProductorComponent,
    data: { breadcrumb: 'Productor'},
    children: [
      {
        path: 'vm',
        component: VMComponent,
        data: {
          breadcrumb: 'VM'
        },
        children: [
          {
            path: ':id',
            component: VMComponent,
            data: {
              breadcrumb: 'vmid'
            }
          }
        ]
      
      },
      {
        path: 'network',
        component: NetworkComponent,
        data: {
          breadcrumb: 'Network'
        }
      }
    ] 
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

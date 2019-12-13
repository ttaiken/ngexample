import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VMComponent } from './views/productor/vm/vm.component';
import { NetworkComponent } from './views/productor/network/network.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './views/comm/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'vm/:id', component: VMComponent },
  { path: 'network/:id',      component: NetworkComponent },
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

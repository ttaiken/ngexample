import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StoreModule } from '@ngrx/store'; 
import { CustomerReducer } from './states/customer.reducer';

import { VMComponent } from './views/productor/vm/vm.component';
import { NetworkComponent } from './views/productor/network/network.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './views/comm/page-not-found/page-not-found.component';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb.component';
import { ProductorComponent } from './views/productor/productor.component';
import { LeftnavComponent } from './components/layout/leftnav/leftnav.component';
import { CznavbarComponent } from './components/layout/cznavbar/cznavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    VMComponent,
    NetworkComponent,
    HomeComponent,
    BreadcrumbComponent,
    ProductorComponent,
    LeftnavComponent,
    CznavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({ historys: CustomerReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

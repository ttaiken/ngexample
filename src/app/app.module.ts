import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { VMComponent } from './views/productor/vm/vm.component';
import { NetworkComponent } from './views/productor/network/network.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './views/comm/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    VMComponent,
    NetworkComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

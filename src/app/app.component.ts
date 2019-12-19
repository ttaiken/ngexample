import { Component } from '@angular/core';


import {select, Store} from '@ngrx/store'; 
import { HistoryOperation } from './models/historyoperation'; 

import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb.component';
import { LeftnavComponent } from './components/layout/leftnav/leftnav.component';
import { CznavbarComponent } from './components/layout/cznavbar/cznavbar.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngexample';
  historys: Observable<HistoryOperation[]>;
  constructor(private store: Store<{ historys: HistoryOperation[] }>){
    this.historys = store.pipe(select('historys'));
  }
}

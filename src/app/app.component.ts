import { Component } from '@angular/core';

import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb.component';
import { LeftnavComponent } from './components/layout/leftnav/leftnav.component';
import { CznavbarComponent } from './components/layout/cznavbar/cznavbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngexample';
}

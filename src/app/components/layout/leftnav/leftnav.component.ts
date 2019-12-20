import { Component, OnInit,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {
  
  @Output() hide = new EventEmitter<boolean>();
    Routes = [
    {
      path: 'home',
      data: {breadcrumb: 'Home'}
  
    },
    { 
      path: 'productor', 

      data: { breadcrumb: 'Productor'},
      children: [
        {
          path: 'vm',
 
          data: {
            breadcrumb: 'VM'
          },
          children: [
            {
              path: ':id',
   
              data: {
                breadcrumb: 'vmid'
              }
            }
          ]
        
        },
        {
          path: 'network',

          data: {
            breadcrumb: 'Network'
          }
        }
      ] 
    },

    ];
  constructor() {

   }

  ngOnInit() {
  }
  HideLeftbar(){
    this.hide.emit(false);
  }
}

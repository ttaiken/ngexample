import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-czhead',
  templateUrl: './czhead.component.html',
  styleUrls: ['./czhead.component.scss']
})
export class CzheadComponent implements OnInit {
  @Output() showLeftbar = new EventEmitter<boolean>();
  showLogin: boolean;
  constructor() { }

  ngOnInit() {
    this.showLogin = false;
  }
  ShowLeftbar(){
    this.showLeftbar.emit(true);
  }
  ShowLogin(){
    this.showLogin =  !this.showLogin;

  }
}

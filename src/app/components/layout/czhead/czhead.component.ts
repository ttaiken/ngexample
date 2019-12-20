import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-czhead',
  templateUrl: './czhead.component.html',
  styleUrls: ['./czhead.component.scss']
})
export class CzheadComponent implements OnInit {
  @Output() show = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  ShowLeftbar(){
    this.show.emit(true);
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3HeadComponent } from './d3-head.component';

describe('D3HeadComponent', () => {
  let component: D3HeadComponent;
  let fixture: ComponentFixture<D3HeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3HeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3HeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

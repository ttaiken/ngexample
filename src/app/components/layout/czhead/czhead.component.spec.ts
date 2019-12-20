import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CzheadComponent } from './czhead.component';

describe('CzheadComponent', () => {
  let component: CzheadComponent;
  let fixture: ComponentFixture<CzheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CzheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CzheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

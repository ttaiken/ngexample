import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CznavbarComponent } from './cznavbar.component';

describe('CznavbarComponent', () => {
  let component: CznavbarComponent;
  let fixture: ComponentFixture<CznavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CznavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CznavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

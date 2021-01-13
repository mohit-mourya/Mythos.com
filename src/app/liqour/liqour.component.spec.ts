import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqourComponent } from './liqour.component';

describe('LiqourComponent', () => {
  let component: LiqourComponent;
  let fixture: ComponentFixture<LiqourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiqourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiqourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

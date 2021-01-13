import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBarDataComponent } from './slide-bar-data.component';

describe('SlideBarDataComponent', () => {
  let component: SlideBarDataComponent;
  let fixture: ComponentFixture<SlideBarDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBarDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideBarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

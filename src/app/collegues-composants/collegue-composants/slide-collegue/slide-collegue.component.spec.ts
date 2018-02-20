import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCollegueComponent } from './slide-collegue.component';

describe('SlideCollegueComponent', () => {
  let component: SlideCollegueComponent;
  let fixture: ComponentFixture<SlideCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

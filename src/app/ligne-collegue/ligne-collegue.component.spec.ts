import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneCollegueComponent } from './ligne-collegue.component';

describe('LigneCollegueComponent', () => {
  let component: LigneCollegueComponent;
  let fixture: ComponentFixture<LigneCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

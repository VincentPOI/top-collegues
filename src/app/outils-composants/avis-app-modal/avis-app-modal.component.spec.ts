import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisAppModalComponent } from './avis-app-modal.component';

describe('AvisAppModalComponent', () => {
  let component: AvisAppModalComponent;
  let fixture: ComponentFixture<AvisAppModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisAppModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

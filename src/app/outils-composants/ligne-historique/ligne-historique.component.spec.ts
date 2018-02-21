import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneHistoriqueComponent } from './ligne-historique.component';

describe('LigneHistoriqueComponent', () => {
  let component: LigneHistoriqueComponent;
  let fixture: ComponentFixture<LigneHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

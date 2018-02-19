import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixAffichageComponent } from './choix-affichage.component';

describe('ChoixAffichageComponent', () => {
  let component: ChoixAffichageComponent;
  let fixture: ComponentFixture<ChoixAffichageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixAffichageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

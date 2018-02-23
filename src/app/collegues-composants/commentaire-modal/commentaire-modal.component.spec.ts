import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireModalComponent } from './commentaire-modal.component';

describe('CommentaireModalComponent', () => {
  let component: CommentaireModalComponent;
  let fixture: ComponentFixture<CommentaireModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaireModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

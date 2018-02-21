import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionBadgeComponent } from './connection-badge.component';

describe('ConnectionBadgeComponent', () => {
  let component: ConnectionBadgeComponent;
  let fixture: ComponentFixture<ConnectionBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

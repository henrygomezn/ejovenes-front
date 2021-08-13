import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacionesComponent } from './participaciones.component';

describe('ParticipacionesComponent', () => {
  let component: ParticipacionesComponent;
  let fixture: ComponentFixture<ParticipacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

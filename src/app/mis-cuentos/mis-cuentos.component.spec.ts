import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCuentosComponent } from './mis-cuentos.component';

describe('MisCuentosComponent', () => {
  let component: MisCuentosComponent;
  let fixture: ComponentFixture<MisCuentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCuentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

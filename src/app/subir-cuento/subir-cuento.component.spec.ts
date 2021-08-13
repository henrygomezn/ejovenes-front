import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirCuentoComponent } from './subir-cuento.component';

describe('SubirCuentoComponent', () => {
  let component: SubirCuentoComponent;
  let fixture: ComponentFixture<SubirCuentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirCuentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirCuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

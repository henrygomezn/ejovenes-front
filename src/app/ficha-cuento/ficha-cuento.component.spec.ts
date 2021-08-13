import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaCuentoComponent } from './ficha-cuento.component';

describe('FichaCuentoComponent', () => {
  let component: FichaCuentoComponent;
  let fixture: ComponentFixture<FichaCuentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaCuentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaCuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

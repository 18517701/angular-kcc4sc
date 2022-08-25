import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetallesComponent } from './product-detalles.component';

describe('ProductDetallesComponent', () => {
  let component: ProductDetallesComponent;
  let fixture: ComponentFixture<ProductDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

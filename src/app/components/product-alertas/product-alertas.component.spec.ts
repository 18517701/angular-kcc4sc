import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertasComponent } from './product-alertas.component';

describe('ProductAlertasComponent', () => {
  let component: ProductAlertasComponent;
  let fixture: ComponentFixture<ProductAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAlertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

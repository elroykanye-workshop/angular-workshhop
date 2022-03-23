import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuFormRxComponent } from './sku-form-rx.component';

describe('SkuFormRxComponent', () => {
  let component: SkuFormRxComponent;
  let fixture: ComponentFixture<SkuFormRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkuFormRxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuFormRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

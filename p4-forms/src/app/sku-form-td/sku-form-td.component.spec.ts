import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuFormTdComponent } from './sku-form-td.component';

describe('SkuFormTdComponent', () => {
  let component: SkuFormTdComponent;
  let fixture: ComponentFixture<SkuFormTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkuFormTdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuFormTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

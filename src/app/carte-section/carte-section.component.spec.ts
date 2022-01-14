import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteSectionComponent } from './carte-section.component';

describe('CarteSectionComponent', () => {
  let component: CarteSectionComponent;
  let fixture: ComponentFixture<CarteSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

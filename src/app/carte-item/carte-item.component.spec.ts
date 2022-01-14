import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteItemComponent } from './carte-item.component';

describe('CarteItemComponent', () => {
  let component: CarteItemComponent;
  let fixture: ComponentFixture<CarteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

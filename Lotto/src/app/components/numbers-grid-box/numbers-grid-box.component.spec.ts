import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersGridBoxComponent } from './numbers-grid-box.component';

describe('NumbersGridBoxComponent', () => {
  let component: NumbersGridBoxComponent;
  let fixture: ComponentFixture<NumbersGridBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumbersGridBoxComponent]
    });
    fixture = TestBed.createComponent(NumbersGridBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

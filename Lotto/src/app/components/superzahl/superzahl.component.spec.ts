import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperzahlComponent } from './superzahl.component';

describe('SuperzahlComponent', () => {
  let component: SuperzahlComponent;
  let fixture: ComponentFixture<SuperzahlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperzahlComponent]
    });
    fixture = TestBed.createComponent(SuperzahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

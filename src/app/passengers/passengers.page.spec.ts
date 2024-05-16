import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassengersPage } from './passengers.page';

describe('PassengersPage', () => {
  let component: PassengersPage;
  let fixture: ComponentFixture<PassengersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

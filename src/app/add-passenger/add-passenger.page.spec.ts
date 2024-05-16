import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPassengerPage } from './add-passenger.page';

describe('AddPassengerPage', () => {
  let component: AddPassengerPage;
  let fixture: ComponentFixture<AddPassengerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPassengerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

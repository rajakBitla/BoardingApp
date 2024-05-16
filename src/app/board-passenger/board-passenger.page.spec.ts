import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardPassengerPage } from './board-passenger.page';

describe('BoardPassengerPage', () => {
  let component: BoardPassengerPage;
  let fixture: ComponentFixture<BoardPassengerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPassengerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TsdashboardPage } from './tsdashboard.page';

describe('TsdashboardPage', () => {
  let component: TsdashboardPage;
  let fixture: ComponentFixture<TsdashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TsdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

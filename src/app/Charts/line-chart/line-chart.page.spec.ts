import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineChartPage } from './line-chart.page';

describe('LineChartPage', () => {
  let component: LineChartPage;
  let fixture: ComponentFixture<LineChartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

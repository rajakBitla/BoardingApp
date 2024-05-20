import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchbusesPage } from './searchbuses.page';

describe('SearchbusesPage', () => {
  let component: SearchbusesPage;
  let fixture: ComponentFixture<SearchbusesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbusesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

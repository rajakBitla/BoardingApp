import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterListPage } from './filter-list.page';

describe('FilterListPage', () => {
  let component: FilterListPage;
  let fixture: ComponentFixture<FilterListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

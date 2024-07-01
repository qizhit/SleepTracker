import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewLogOvernightSleepPage } from './view-log-overnight-sleep.page';

describe('ViewLogOvernightSleepPage', () => {
  let component: ViewLogOvernightSleepPage;
  let fixture: ComponentFixture<ViewLogOvernightSleepPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewLogOvernightSleepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

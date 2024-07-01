import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewLogSleepinessPage } from './view-log-sleepiness.page';

describe('ViewLogSleepinessPage', () => {
  let component: ViewLogSleepinessPage;
  let fixture: ComponentFixture<ViewLogSleepinessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewLogSleepinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

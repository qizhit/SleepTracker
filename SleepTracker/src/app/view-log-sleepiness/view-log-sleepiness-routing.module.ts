import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLogSleepinessPage } from './view-log-sleepiness.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLogSleepinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLogSleepinessPageRoutingModule {}

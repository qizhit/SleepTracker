import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLogOvernightSleepPage } from './view-log-overnight-sleep.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLogOvernightSleepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLogOvernightSleepPageRoutingModule {}

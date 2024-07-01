import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'log-overnight-sleep',
        loadChildren: () => import('../log-overnight-sleep/log-overnight-sleep.module').then(m => m.LogOvernightSleepPageModule)
      },
      {
        path: 'log-sleepiness',
        loadChildren: () => import('../log-sleepiness/log-sleepiness.module').then(m => m.LogSleepinessPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

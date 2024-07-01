import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,

    children: [
      {
        path: 'view-log-overnight-sleep',
        loadChildren: () => import('../view-log-overnight-sleep/view-log-overnight-sleep.module').then(m => m.ViewLogOvernightSleepPageModule)
      },
      {
        path: 'view-log-sleepiness',
        loadChildren: () => import('../view-log-sleepiness/view-log-sleepiness.module').then(m => m.ViewLogSleepinessPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

  
})
export class Tab2PageRoutingModule {}

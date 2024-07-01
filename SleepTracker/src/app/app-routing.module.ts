import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'view-log-overnight-sleep',
    loadChildren: () => import('./view-log-overnight-sleep/view-log-overnight-sleep.module').then( m => m.ViewLogOvernightSleepPageModule)
  },
  {
    path: 'view-log-sleepiness',
    loadChildren: () => import('./view-log-sleepiness/view-log-sleepiness.module').then( m => m.ViewLogSleepinessPageModule)
  },
  {
    path: 'log-sleepiness',
    loadChildren: () => import('./log-sleepiness/log-sleepiness.module').then( m => m.LogSleepinessPageModule)
  },
  {
    path: 'log-overnight-sleep',
    loadChildren: () => import('./log-overnight-sleep/log-overnight-sleep.module').then( m => m.LogOvernightSleepPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

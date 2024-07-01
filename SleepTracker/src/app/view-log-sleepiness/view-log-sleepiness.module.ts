import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLogSleepinessPageRoutingModule } from './view-log-sleepiness-routing.module';

import { ViewLogSleepinessPage } from './view-log-sleepiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLogSleepinessPageRoutingModule
  ],
  declarations: [ViewLogSleepinessPage]
})
export class ViewLogSleepinessPageModule {}

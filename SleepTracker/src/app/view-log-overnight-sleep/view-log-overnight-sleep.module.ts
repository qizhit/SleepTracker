import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLogOvernightSleepPageRoutingModule } from './view-log-overnight-sleep-routing.module';

import { ViewLogOvernightSleepPage } from './view-log-overnight-sleep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLogOvernightSleepPageRoutingModule
  ],
  declarations: [ViewLogOvernightSleepPage]
})
export class ViewLogOvernightSleepPageModule {}

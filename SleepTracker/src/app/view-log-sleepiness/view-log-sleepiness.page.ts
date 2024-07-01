import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-view-log-sleepiness',
  templateUrl: './view-log-sleepiness.page.html',
  styleUrls: ['./view-log-sleepiness.page.scss'],
})
export class ViewLogSleepinessPage implements OnInit {

  sleepinessData: StanfordSleepinessData[] = [];

  constructor(public sleepService:SleepService) { }

  async ngOnInit() {
    await this.sleepService.loadAllData();
    this.sleepinessData = this.sleepService.getSleepinessData();
  }

  async deleteOne(index: number) {
    await this.sleepService.deleteSleepinessData(index);
  }

}

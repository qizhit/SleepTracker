import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';

@Component({
  selector: 'app-view-log-overnight-sleep',
  templateUrl: './view-log-overnight-sleep.page.html',
  styleUrls: ['./view-log-overnight-sleep.page.scss'],
})
export class ViewLogOvernightSleepPage implements OnInit {

  public allOvernightData: OvernightSleepData[] | undefined;

  constructor(private sleepService: SleepService) { }

  async ngOnInit() {
    await this.sleepService.loadAllData();
    this.allOvernightData = this.sleepService.getAllOvernightData();
    console.log(this.allOvernightData);
  }

  async deleteOne(index: number) {
    await this.sleepService.deleteOvernightData(index);
  }

}

import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-log-overnight-sleep',
  templateUrl: './log-overnight-sleep.page.html',
  styleUrls: ['./log-overnight-sleep.page.scss'],
})
export class LogOvernightSleepPage implements OnInit {

  sleepStart: string = this.getLocalDateTime();
  sleepEnd: string = this.getLocalDateTime();

  constructor(
    private sleepService: SleepService,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  getLocalDateTime(): string {
    const now = new Date();
    return now.getFullYear() + '-' +
           this.pad(now.getMonth() + 1) + '-' + // Months are 0-based
           this.pad(now.getDate()) + 'T' +
           this.pad(now.getHours()) + ':' +
           this.pad(now.getMinutes());
  }

  pad(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }


  logSleep() {

    const start = new Date(this.sleepStart);
    const end = new Date(this.sleepEnd);
    const differenceInMilliseconds = end.getTime() - start.getTime();
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

    if (differenceInHours <= 0) {
      // Data is not valid
      this.presentAlert('The time went to bed should be earlier than wake up time.');
    } else if (differenceInHours >= 48){
      this.presentAlert('Caution! Sleep duration is longer than 48 hours.');
    } else {
      // Data is valid
      // Add log-overnight-sleep data to sleep-service.ts
      const newSleepEntry = new OvernightSleepData(start, end);
      this.sleepService.logOvernightData(newSleepEntry);

      console.log(`Sleep from ${start} to ${end}, Total Hours: ${differenceInHours.toFixed(2)} hours`);
      this.presentToast('Overnight sleep time saved successfully!');
    }
  }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}

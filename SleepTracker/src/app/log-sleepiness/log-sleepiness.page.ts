import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-log-sleepiness',
  templateUrl: './log-sleepiness.page.html',
  styleUrls: ['./log-sleepiness.page.scss'],
})
export class LogSleepinessPage implements OnInit {

  sleepinessLevel: number = 0;
  sleepinessLevels = [
    { value: 1, description: '1 - Feeling active, vital, alert, or wide awake' },
    { value: 2, description: '2 - Functioning at high levels, but not at peak; able to concentrate' },
    { value: 3, description: '3 - Awake, but relaxed; responsive but not fully alert' },
    { value: 4, description: '4 - Somewhat foggy, let down' },
    { value: 5, description: '5 - Foggy; losing interest in remaining awake; slowed down' },
    { value: 6, description: '6 - Sleepy, woozy, fighting sleep; prefer to lie down' },
    { value: 7, description: '7 - No longer fighting sleep, sleep onset soon; having dream-like thoughts' },
  ];

  constructor(
    private toastController: ToastController,
    private sleepService: SleepService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  logSleepiness() {
    if (this.sleepinessLevel === 0) {
      this.presentAlert('Please choose a sleepiness level.');
      return;
    }

    if (this.sleepinessLevel >= 1 && this.sleepinessLevel <= 7) {
      let sleepinessData = new StanfordSleepinessData(this.sleepinessLevel, new Date());
      this.sleepService.logSleepinessData(sleepinessData);
      this.presentToast('Sleepiness level saved successfully!.');
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

  selectLevel(value: number) {
    this.sleepinessLevel = value;
  }

}

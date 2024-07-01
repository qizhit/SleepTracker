import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor() {
		this.init();
	}

	async init() {
		await this.loadAllData();
	}  

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}


	public getAllOvernightData(): OvernightSleepData[] {
		// used in view-log-overnight-sleep.page.ts
		return SleepService.AllOvernightData;
	}

	public getSleepinessData(): StanfordSleepinessData[] {
		// used in view-log-sleepiness.page.ts
		return SleepService.AllSleepinessData;
	}

	// Use @capacitor/preference to store data
	public async logOvernightData(sleepData: OvernightSleepData) {
		SleepService.AllOvernightData.push(sleepData);
		await Preferences.set({
		  key: 'allOvernightData',
		  value: JSON.stringify(SleepService.AllOvernightData)
		});
	}
	
	  public async logSleepinessData(sleepData: StanfordSleepinessData) {
		SleepService.AllSleepinessData.push(sleepData);
		await Preferences.set({
		  key: 'allSleepinessData',
		  value: JSON.stringify(SleepService.AllSleepinessData)
		});
	}

	// Load old data
	public async loadAllData() {
		
		const overnightDataString = await Preferences.get({ key: 'allOvernightData' });
		const sleepinessDataString = await Preferences.get({ key: 'allSleepinessData' });

		const overnightData = overnightDataString.value ? JSON.parse(overnightDataString.value) : [];
		const sleepinessData = sleepinessDataString.value ? JSON.parse(sleepinessDataString.value) : [];

		SleepService.AllOvernightData = overnightData.map((od: any) => new OvernightSleepData(new Date(od.sleepStart), new Date(od.sleepEnd)));
    	SleepService.AllSleepinessData = sleepinessData.map((sd: any) => new StanfordSleepinessData(sd.loggedValue, new Date(sd.loggedAt)));
	}

	public async deleteOvernightData(index: number) {
		if (index >= 0 && index < SleepService.AllOvernightData.length) {
			SleepService.AllOvernightData.splice(index, 1);
			await Preferences.set({
				key: 'allOvernightData',
				value: JSON.stringify(SleepService.AllOvernightData)
			});
		}
	}

	public async deleteSleepinessData(index: number) {
		if (index >= 0 && index < SleepService.AllSleepinessData.length) {
			SleepService.AllSleepinessData.splice(index, 1);
			await Preferences.set({
				key: 'allSleepinessData',
				value: JSON.stringify(SleepService.AllSleepinessData)
			});
		}
	}
	
}
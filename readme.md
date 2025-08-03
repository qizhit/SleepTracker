# Sleep Tracker
**Notes:** Originally developed at UC Irvine and hosted under my school GitHub account ([QZT168](https://github.com/QZT168)), this project is now forked to my personal GitHub for long-term access.

**Contributors:** Qizhi Tian and Jonathan Guo

## Overview:
This app is a mobile sleep tracking tool built with the Ionic Framework and Angular. It allows users to log overnight sleep and daytime sleepiness based on the Stanford Sleepiness Scale. Our target users are college students, who often have irregular sleep patterns and can benefit from consistent tracking.

The app consists of two main tabs: "Log" and "View", designed for simplicity and ease of use.

## App Features:
1. **Log Page**  
   Upon launching the app, users land on the Log page. It contains buttons to log both overnight sleep and sleepiness.  
   - Main Log UI, with custom starry background and styled buttons for a cozy and calming feel.

     <img width="300" alt="image" src="https://github.com/user-attachments/assets/e276c845-a4cd-4c15-8ac7-c0826f4987cf" />

3. **Log Overnight Sleep**  
   Users can choose their sleep start and end time.
   - Users are notified of successful logs via toast messages.

     <img width="300" alt="image" src="https://github.com/user-attachments/assets/ea6d7524-c12c-4b98-b46e-43c26c283e70" />
   - Error Prevention: Alert pops up if the user logs a wake-up time before sleep starts or if the total sleep time exceeds 48 hours.

     <img width="300" alt="image" src="https://github.com/user-attachments/assets/3a5422d0-0e26-424b-88d9-387e6131518e" />

5. **Log Sleepiness**  
   Users select their sleepiness level (1–7) using the Stanford Sleepiness Scale. The app also prevents submission without selection.

   <img width="300" alt="image" src="https://github.com/user-attachments/assets/efb2342e-c80f-45c0-986d-eb4853b6e3b2" />

7. **View Logged Data**  
   Users can view their logged sleep and sleepiness entries on a separate tab.  
   - "View" page with buttons to access each category.

     <img width="300" alt="image" src="https://github.com/user-attachments/assets/ebcfdf06-8422-4ec2-b1f8-3ab81c9149bd" />
   - Logged overnight sleep records, showing duration and date, with trash icon for deletion.

     <img width="300" alt="image" src="https://github.com/user-attachments/assets/e263df7a-e67f-4a9d-b445-296444fa2dcd" />
   - Logged sleepiness records, showing timestamp and description.

     <img width="300" alt="image" src="https://github.com/user-attachments/assets/c76afb30-5125-40ec-8089-d1b405ce8680" />

## Data Persistence
- We implemented **local storage** to back up sleep logs.
- All logs persist across refreshes, fulfilling the “backup data” requirement.
- We chose this over using native device features to simplify testing and support development in the browser environment.

## Design Rationale:

- **Useful Initial View**: Landing on the Log page encourages daily interaction.
- **Aesthetic Appeal**: We designed a starry night background and large icons to match the theme of sleep.
- **Error Prevention**: Input validation for time order and required selections.
- **Platform Convention**: Ionic components provide smooth mobile-native UI.
- **Customization**: Button icons (🌙, ☀️, ⏰) improve visual clarity.

Our design is aimed at relaxing and encouraging reflection, minimizing user effort and maximizing visual feedback.

## How to Use:

1. Run `npm install` to install dependencies.
2. Run `ionic serve` to start the app.
3. Use a mobile emulator (e.g., Chrome DevTools) to simulate mobile experience.
4. Log and view sleep/sleepiness; test refresh persistence.

## Resources Used:

- [Ionic Docs](https://ionicframework.com/docs)
- Class lectures & Stanford Sleepiness Scale
- Background image sourced from royalty-free resources

Thanks for reviewing our project!

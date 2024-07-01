--Readme document for *Jonathan Guo, Qizhi Tian*, *jguo14@uci.edu, qizhit@uci.edu*--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

20/20
- 3/3 The ability to log overnight sleep
- 3/3 The ability to log sleepiness during the day
- 3/3 The ability to view these two categories of logged data
- 3/3 Either using a native device resource or backing up logged data
- 3/3 Following good principles of mobile design
- 3/3 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?

~20 hours

3. What online resources did you consult when completing this assignment? (list specific URLs)

https://stackoverflow.com/questions/63643148/angular-ionic-ion-datetime-picker
https://ionicframework.com/docs/api/radio
https://www.freecodecamp.org/news/how-to-add-an-image-url-to-your-div/
https://forum.ionicframework.com/t/how-to-add-a-background-image-to-ionic-4/154094
https://capacitorjs.com/docs/apis/preferences
https://ionic.io/ionicons?_gl=1*8hs3t6*_ga*MTEzMzg5NzAzNS4xNzEwMzYwMjk5*_ga_REH9TJF6KF*MTcxMDM4MTE0My4zLjAuMTcxMDM4MTE0NS4wLjAuMA..
https://ionicframework.com/docs/api/datetime
https://www.npmjs.com/package/@capacitor/preferences


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

No one

5. Is there anything special we need to know in order to run your code?

No

--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?

People on the younger side with busy lives, because they may want something to keep track of their sleep habits.

7. Did you design your app specifically for iOS or Android, or both?

Both

8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?

The user can click on the log overnight sleep button which brings themto a page where they can select the time/date they went to bed
and the time/date they woke up. This was the most intuitive way for the users to enter data because they can specify exact times.

9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
 
Similarly to logging overnight sleep, the user can click the log sleepiness button, which
brings them to a page to select their level of sleepiness from a list of choices displayed. 
We aimed to keep this part simple and minimalistic because all the user needs to do is make
a selection from a list since we store the time they inputted it ourselves.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?

The user can click on the view button at the bottom to go to the viewing page to select to view logged overnight sleep time
or logged sleepiness. We separated this from the logging page because it is more intuitive and also looks more organized. 


11. Which feature choose--using a native device resource, backing up logged data, or both?

Backing up logged data


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
N/A


13. If you backed up logged data, where does it back up to?

We store the data locally by using the module called Preferences from @capacitor/preferences
We take the data from AllOvernightData into Preferences, and then extract them from Preferences in loadAllData(), which is run immediately when clicking the view log overnight sleep button


14. How does your app implement or follow principles of good mobile design?

Our initial view page is defaulted to the log page and users can also click the "back" button to go back to where they came from.
We also used error prevention in logging overnight sleep and logging sleepiness to make sure inputs are valid, and we also made our platform compatible with both Android and IOS.

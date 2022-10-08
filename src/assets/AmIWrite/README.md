# Am I Write? Mobile App
A Mobile Application with SQLiteOpenHelper as the local database. 

We incorporated AI to help identify younger victims in the early stage of family violence. Since this is an ongoing partnership with Society Agasint Family Violence (SAFV), I wouldn't be able to share the code.

I lead my team of 3 where they focused on other areas like the AI side and the cloud implementation side of things. My Role in the project was the Lead Software Engineer where I built the mobile app.

Date: Development started in June 2022<br>
Live Demo: Currenty there's no live demo, but we're looking to bring it to beta testing soon

## What I did/Features:
- Saving Journals to the Database
- File Upload, File Preview and Saving to Database
- Dialogs and BottomFragments to return output of model/recommendations for youths.
- Dark Mode with SharedPreferences
- Bottom Navigation Bars -> Working with Fragments and Activities
- Used SQLiteOpenHelper for local database
- Integrated a model.tflite file into the Android App (with tokenizing and padding text in Kotlin)

## How it Works
- User Enters the App -> They can view past entries of their journal
- User Write a Journal, they can also attach images to their journals
- They are then prompted with a Popup asking whether they want our AI to analyze and provide recommendations for their situation.
- They choose Yes
- A Bottom Popup appears showing then a percentage % returned from our AI model and recommendations mapped by SAFV depending on the severity of their situation
![Inserting An Entry](insertingAnEntry.gif)<br><br>

## Notes
Since this is an ongoing project, we are still working on fine tuning the app according to users from our user testing. There are also plans to widen the target audience to not only identifying Family Violence but also expanding to youths at risk in general as many issues could be overlapping as discussed with SAFV.

## Contact
Jolene - [jolenechong7@gmail.com](mailto:jolenechong7@gmail.com) <br>
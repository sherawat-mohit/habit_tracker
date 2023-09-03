# Habit Tracker

* This project is a habit tracker used to track the habits of of the User on daily and weekly basis.
* It is created using HTML, CSS, JavaScript, Node.js and MongoDB
* It is used to store **name**, **status** and **timestamps** of the habits
* We can perform requests in this habit tracker app like
    1. **Creating** a new habit from the list or create a *custom habit*
    2. **Updating** the *status* of the habit
    3. **Deleting** the habit
    4. **View** the *Weekly status* of habit and change their status too


## Steps for setting up habit tracker
1. Clone this repository using the following command:
`gh repo clone sherawat-mohit/habit_tracker`

2. Install the required dependencies using the following command:
`npm install` 

3. Start the application using the following command:
`npm run start` 

4. Open the application in your web browser by visiting the following URL:
`http://localhost:3000` 

**Usage:**

1.User can select the already existing habits to track or can add a custom habit by typing the the textbox area.

2.User has a feature to mark the status of the habit as Done, Not Done or Not Started (by default Not started is selected).

3.User can also delete a habit if not required anymore.

4.User can also move to the Weekly View page to track the status of habits for the past week.

5.User can change the status of the current date or past 7 days by clicking on the icon displayed under the dates.

6.Following color of icons display the Status of the habit:
Red - Not Done
Green - Done
Grey - Not Started

7.When user changes the Status of any habit for the Current date it is also reflcted on the Daily View page

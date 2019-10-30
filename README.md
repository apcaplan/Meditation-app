Welcome to Meditation App! And congratulations! You've found an excellent tool to take your meditation practice to the next level.

This app features an easy-to-use timer. After signing in, simply click on "meditation" and set the timer by depressing the arrows for hours, minutes, and seconds - then "set timer". If you need to pause during the meditation, click "stop". You will have options to resume the practice. If you don't want to continue the session and you don't want to record the practice then click on "discard session". If you want to record the practice, click "finish".

When time is up or when you click on "finish", you will be guided through a reflection. Take the time to respond clearly and honestly - you'll be glad you did later on!

Another exciting feature of this app is the meditation journal. You can find it from the welcome screen by clicking "journal". This is the perfect way to track your progress - and it's super easy! Meditation App logs the time, date, and length of your meditaitons, along with your reflections. The journal presents all these notes in a way that makes it easy to review and notice trends. Should you want to remove one of the entries, simply click on the trash can. Be careful, though - once deleted, you won't be able to get the record back!

When it's time to sign out or if you need to change your password, head back to the welcome screen and click on "settings". You'll find both options there.

Happy meditating!

## Setup and Installation - Instructions for Developers
To use the program locally, fork and clone the repo. Then install dependencies with the following terminal commands:
- $  npm install
- react-router-dom: $  npm install --save react-router-dom
- axios:  $  npm install axios
- react-bootstrap: $  npm install react-bootstrap bootstrap
- fontawesome:
  - $  npm install --save @fortawesome/fontawesome-svg-core
  - $  npm install --save @fortawesome/free-solid-svg-icons
  - $  npm install --save @fortawesome/react-fontawesome

## Relevant Links
- front end deployed: https://apcaplan.github.io/Meditation-app/
- back end repo: https://github.com/apcaplan/Meditation-app-api
- back end deployed: https://meditation-app-api.herokuapp.com/

## Technologies Used
- React.js
- CSS
- JavaScript

## Wireframe
https://imgur.com/ETuAHCB

## User Stories
- As a user, I want to be able to create an account
- As a user, I want to be able to log in
- As a user, I want to be able to change my password
- As a user, I want to be able to log out
- As a user, I want to be able to set a timer
- As a user, I want to be able to use a timer (start, pause, stop, reset)
- As a user, I want to be able to log my meditation sessions
- As a user, I want to be able to keep notes/reflections on my meditation sessions
- As a user, I want to be able to delete records I no longer want to keep

## Development process
I began the development process by creating a wireframe, an ERD, and user stories for the app I'd envisioned. Coding started by creating the back end, and then continued with this repo. I built the timer component first. Then I added ways to pause, resume, and reset. The rest of the app was built around it, one component at a time. I added a survey modal to guide the user in reflecting on his/her meditation experience, and coded axios calls to store this data on the backend. Next, I built a journal component to display this data, and added an option for removing unnwanted entries. Then I went back to the timer and developed a component for setting it. I arranged display of authentication elements, and then turned my attention to styling.

## Future directions
Future iterations of this app will include:
- An option to set a starting bell
- Ability to select different bell sounds
- A preparation timer to allow for setup before meditation timer begins
- A profile page with user information and practice data (such as total number of sessions and average practice time)

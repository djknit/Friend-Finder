# Friend Finder

### The user answers 10 survey questions and is then matched with the person whose answers most closely match theirs in this Express.js server powered app.

## Contents
* [Links](#links)
* [Project Goals](#project-goals)
* [Project Features](#project-features)
* [Technologies Used](#technologies-used)
* [Instructions for Use](#instructions-for-use)
* [Developer](#developer)

## Links
* Live App: [people-matcher.herokuapp.com/](https://people-matcher.herokuapp.com/)
* GitHub Repository: [github.com/djknit/Friend-Finder](https://github.com/djknit/Friend-Finder)

## Project Goals
* Create front end of application with a form containing the 10 survey questions (with answers being agree/disagree on a scale of 1-5).
* Set up the Node/Express server with routes to deliver the html, an api route to accept a new user's answers and calculate and return their closest match, and an api route that returns the current array of users.
* Deploy to Heroku.

## Project Features
* The input form accepts the user's name, a link to a picture, and their numeric answers to the 10 survey questions. The survey questions use radio buttons to ensure an integer from 1 to 5 is entered.
* The input is validated on the front end to ensure that all the questions were answered before being posted to the server with jQuery's Ajax method.
* The new user's answers are compared against those of all other existing users. The total difference between two user's scores is calculated by adding together the absolute values of the differences of the two user's answers to each of the 10 questions. The existing user (or users if there is a tie) with the least total difference in answers to the new user is returned by the server along with the value of this difference.
* The new user is added to the array of existing users by the server after their match is found and before the response is sent.
* The front end receives the response from the surver and displays the match. The front end also calculates a percentage compatibility score for the match by subtracting the calculated total difference in answers from the largest possible total difference (40) and dividing the result by the largest possible total difference.
* There is a link to the API route that returns the array of existing users.

## Technologies Used
#### Front End
* Bootstrap
* jQuery
* HTML, CSS, and JavaScript

#### Back End
* Node and Express
* Heroku

## Instructions for Use
#### Building the App
If you wish to build the app yourself, clone the [repository](https://github.com/djknit/burger) to your local machine. You must have Node.js installed on your machine. Navigate to the root directory of the repository in your command terminal and run `npm i` to install the Node packages that are dependencies of the app. You should now be ready to run the app.

#### Running the App
If you built the app yourself on your local machine, you should be able to start it by running `node server.js` in the root directory of the repository in your command terminal. Visit `localhost:8080` in your browser and you should see the app running if everything worked correctly.

If you wish to use the live version hosted by Heroku, visit [`people-matcher.herokuapp.com/`](https://people-matcher.herokuapp.com/) in your browser.

Take the survey and get matched with a friend. Click the API link in the bottom-right of the page to see the current users array.

## Developer
This project is developed and maintained by David Knittel. Any and all questions, comments, suggestions, or proposed contributions are welcome.
* Email: [djknit@gmail.com](mailto:djknit@gmail.com)
* Portfolio: [djknit.github.io](https://djknit.github.io/)
* GitHub: [github.com/djknit](https://github.com/djknit)
* LinkedIn: [linkedin.com/in/djknit](https://www.linkedin.com/in/djknit/)

This project was originally developed as a homework assignment for the KU Coding Bootcamp Full Stack Flex program and uses specifications laid out by the homework requirements.
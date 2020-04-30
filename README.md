# Code-Quiz

Sources Used:
learnbuildteach.com
stackoverflow.com
w3schools.com

Using mainly these sources, a lot of googling, and even more trial and error, I finally got the application to work! Here is a brief description of each page and the process into it.

1.index.html 
Beginning the project, I googled/youtube searched many different approaches to a "quiz" style application. One of the results I found led me to 'learnbuildteach' which helped me the most and included a series of tutorials on how to code the specific functions required for this assignment. The index page is pretty straightforward - containing a div container and flex items to center the items correctly. It also contains two button elements - Play & High Scores - that are linked to their respective pages.

2.app.css 
The CSS used was also taught in the source above. This was the easiest part for me and the most enjoyable as I began to make the page look nice. The main things I learned doing so were flexbox and rem. Flexbox was insanely helpful to me as it not only centered what I wanted but also made it responsive to the page layout/sizing. Using rem as a unit was also interesting as it was a relative measurement rather than absoulute. Another cool aspect I learned was adding :hover to the class names. By adding this, I was able to use transform and box-shadow to create a cool effect letting the user know the button was clickable.

3.game.html
Creating the layout for this page was definitely more challenging than creating the homepage, for obvious reasons, however it generally followed the same style. A container was again created to hold all the items centered. Afterwords, heads up display holders were created with specific id tags, Question, Score, & Timer, so that I could link to them later in javascript. Below this lies the heading for the main question. Below that are more divs containing a block for each A, B, C, and D as well as their respective answer choices. I also gave these choices different data-numbers to use in javascript.

4.game.js
This part was the most difficult and time-consuming part by far. The source I was using had taught incorrect code and as a result, a lot of reading and searching were done on stackoverflow and w3schools. I began this page by creating variables, with some of those grabbing elements on the html page. The next variables initialized the game, setting the score, questions set, and boolean. The questions array was made with a max number of 5 questions as well as a correct bonus score of 10. The next function started the game, setting everything to 0 as well as beginning the 60 second timer. The next function of getNewQuestion was pretty difficult to work. But basically without making this too long, the logic works as follows:
   * If no more questions are available to get out of the question array, your score will go into local storage and then will take you to the end page. This is for the ending of the game.
   * The questions go up by one, randomly using Math.random.
   * Using the data set, matches the answers to the correct number and then applies a class of incorrect and correct to add bonus score, green/red color, and subtract 10 seconds of time.
   *Timer function set to interval every second, decreasing by a unit of one and taking you to the end window if it reaches 0.

5.game.css
The CSS for the game page followed the same styling as the other pages. The main difference was that a class was created for correct and incorrect, being green and red when selected and applied to the corresponding class of answer.

6.end.html
The ending page has a score heading, an input text form for the username, a save button which linked to the saveHighScore function, and a play again button which linked back to the game html.

7.end.js
This part was almost equally hard as the game.js. The logic basically stores your score into local storage, and then sorts it out from highest to lowest, at a max number of 5 users. Also disabled the save button if no username was added. The trouble I had with this was parsing and stringifying the scores so that it read the values correctly. At first it wasn't storing anything, then it was only storing the name and not the score. This was a big headache as I felt so close to finishing but was stuck here, so thank you stackoverflow.

8.highscores.html
This final page displayed the scores from the local storage onto the page in a list from highest to lowest. Also added was a button that took you back to the homepage.

9.highscores.js
What I learned in this section was really helpful - .map! At first I wasn't able to get the high scores to display, but using this as well as template literals, I was able to grab the high scores from local storage and display each value.




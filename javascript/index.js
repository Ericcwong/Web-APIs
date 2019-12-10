/* upper left hand side needs a way to view the highscore
after the game they have an option to view and clear the highscores  */






/*The center of the page is where the quiz will sit. Need a way to pull questions from questions.js*/
//Will need buttons for starting the quiz and buttons for when the user has made their selection.

//variables for the quiz
var startQuiz = document.getElementById("startQuizBtn");
// var quizHomeEl = docuemnt.getElementById("quizHome");

//Onclick start quiz, also start the timer function then jumps to a new page
    startQuiz.addEventListener("click", addtimer);
    //Hides the quiz home text when the button is clicked and is swapping places witht the quiz
    startQuiz.addEventListener("click",function(){
        document.getElementById("quizHome").hidden = true;
        document.getElementById("quizStart").hidden = false;
    }, false);




/*top right corner has a timer that starts when user hits the start quiz button 
(This would be inside the onclick quiz function)*/

//variables for the timer
var baseTimer = document.getElementById("timer");
var startTime = 76;

function addtimer(){
    //This is to add element h4
    displayTime = document.createElement("h4");
        //This is the actual number count down
        var timerInterval = setInterval(function(){
        startTime--;
        displayTime.textContent = "Timer: " + startTime;
        baseTimer.append(displayTime);
        
        if(startTime === 0){
            clearInterval(timerInterval)
        }
            }, 1000);
}

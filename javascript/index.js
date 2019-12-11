/* upper left hand side needs a way to view the highscore
after the game they have an option to view and clear the highscores  */






/*The center of the page is where the quiz will sit. Need a way to pull questions from questions.js*/
//Will need buttons for starting the quiz and buttons for when the user has made their selection.

//variables for the quiz

//Onclick start quiz, also start the timer function then jumps to a new page
    // startQuiz.addEventListener("click", addtimer);
    $("#startQuizBtn").click(addtimer);
    $("#startQuizBtn").click(function(){
        $("#quiz").hide();
        $("quizGame").show();
        startQuiz();
    });




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
            alert("Game Over ")
        }
            }, 1000);
}

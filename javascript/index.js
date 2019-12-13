/* upper left hand side needs a way to view the highscore
after the game they have an option to view and clear the highscores  */






/*The center of the page is where the quiz will sit. Need a way to pull questions from questions.js*/
//Will need buttons for starting the quiz and buttons for when the user has made their selection.



//Onclick start quiz, also start the timer function then jumps to a new page
    // startQuiz.addEventListener("click", addtimer);
    // $("#startQuizBtn").click(addtimer);
    document.getElementById("startQuizBtn").addEventListener("click",function(){
        document.getElementById("quiz").hidden = true;
        document.getElementById("quizGame").hidden = false;
        displayQuestion();
        addtimer();
    }, false);

    i=0;
    var quizQuestion = document.querySelector(".title");
    var answer0 = document.querySelector("#answer0");
    var answer1 = document.querySelector("#answer1");
    var answer2 = document.querySelector("#answer2");
    var answer3 = document.querySelector("#answer3");
    var answers = false; 
   function displayQuestion(){
       if(i >= questions.length){
       
       }
    var choices = questions[i].choices;
    for(var c = 0; c < choices.length; c++){
        document.getElementById("answer" + c).textContent = choices[c];
        // debugger;
    }
     quizQuestion.textContent = questions[i].title;
    }
    var correctAnswer = questions[i].answer;
    function answerChecker(){
        if(document.querySelectorAll("button").innerHTML !== correctAnswer){
            alert("wrong");
        }else {alert("right");}
    }

   document.getElementById("buttons").addEventListener("click",function(){  
    displayQuestion();
    answerChecker();
   });

/*top right corner has a timer that starts when user hits the start quiz button 
(This would be inside the onclick quiz function)*/

//variables for the timer


function addtimer(){
    var baseTimer = document.getElementById("timer");
    var startTime = 76;
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

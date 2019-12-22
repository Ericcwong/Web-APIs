$(document).ready(function(){
$(".main").hide();
$(".quizHome").show();
});
    $("#startQuizBtn").on("click", function(){
        $("#quiz").hide();
        $(".gameOver").hide();
        $(".main").show();
        displayQuestion();
        addtimer();
    });
    $("#restart").on("click", function(){
        $(".gameOver").hide();
        
        displayQuestion();
        addtimer()
    });
    

/*top right corner has a timer that starts when user hits the start quiz button 
(This would be inside the onclick quiz function)*/
var startTime = 75;

function addtimer(){
    var baseTimer = document.getElementById("scoreBoard");
    
    //This is to add element h4
    
    displayTime = document.createElement("h2");
        //This is the actual number count down
        var timerInterval = setInterval(function(){
        startTime--;
        

        displayTime.textContent = "Timer: " + startTime;
        baseTimer.append(displayTime);
        
        if(startTime === 0){
            clearInterval(timerInterval);
            gameOver();
        }else if (score === 5){
            clearInterval(timerInterval);
        }else if(startTime < 0){
            clearInterval(timerInterval);
            gameOver();
        }
            }, 1000);
        }
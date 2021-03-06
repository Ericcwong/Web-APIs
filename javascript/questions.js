var quiz = {
  questions: [
    {
      title: "Who is not part of the Avengers?",
      choices: ["SpiderMan", "Batman", "Thor", "IronMan"],
      answer: "Batman"
    },
    {
      title: "What is the Highest Grossing film of all time?",
      choices: ["Avengers:Endgame", "Titanic", "Avatar", "Furious 7"],
      answer: "Avengers:Endgame"
    },
    {
      title: "What sauce originated in Utah",
      choices: ["Ketchup", "Mayonnaise", "Catsup", "Fry-Sauce"],
      answer: "Fry-Sauce"
    },
    {
      title: "What is the largest animal currently living in planet Earth",
      choices: ["Tyannosaurus Rex", "Elephant", "BlueWhale", "Terry Crews"],
      answer: "BlueWhale"
    },
    {
      title: "What is the Average student loan debt in 2018",
      choices: ["$10,000", "$20,000", "$30,000", "$40,000"],
      answer: "$30,000"
    }
  ],
  questionCounter: 0
};

console.log(quiz);
var score = 0;

function displayQuestion() {
  var currentQuestion = quiz.questions[quiz.questionCounter];
  $("#scoreBoard").html(`<h2>Score: ${score}</h2>`);
  $("#answerButtons").empty();
  if (quiz.questionCounter === 5) {
    gameOver();
  } else {
    $("#questions").html(`<h3>${currentQuestion.title}</h3>`);
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      $("#answerButtons").append(`
              <button id="answer-${i + 1}" class="answerButton" value=${
        currentQuestion.choices[i]
      }>
              ${currentQuestion.choices[i]}
              </button>   
          `);
    }
  }
}

$(document).on("click", ".answerButton", function() {
  console.log("click", ".answerButton");
  var currentQuestion = quiz.questions[quiz.questionCounter];
  var choice = $(this).val();
  console.log(choice);
  if (choice === currentQuestion.answer) {
    quiz.questionCounter++;
    score++;
    $(".rightOrWrong").html("You are Right!!");
    displayQuestion();
  } else {
    $(".rightOrWrong").html("You are Wrong");
    startTime = startTime - 15;
  }
});

function gameOver() {
  $("#quizGame").hide();
  $(".gameOver").show();
  $(".gameOverTitle").html(`<h1>Game Over!</h1>`);
  $(".score").html(`Time Remaining : ${startTime}`);
  $(".initialText").append(`<h3>Please enter your initials</h3>`);
  $(".initialInput").append(`<input id="initials"></input>`);
  $(".gameOverBtn").append(`
  <button value="save" id="save" class="btn btn-primary"> Save Score </button>
  <button onClick="window.location.reload();" class="btn btn-primary">Start Again!</button>
  `);
}
$(document).on("click", "#save", function(event){
  event.preventDefault();
  console.log("click");
  console.log(initials);
  console.log(startTime);
  var scores = startTime;
  localStorage.setItem("initial",$("#initials").val());
  localStorage.setItem("scores",$("startTime").val());
  $("#initials").val("");
  $("startTime").val("");
});

$("#highScores").on("click", function(event) {
  event.preventDefault();
  $(".main").hide();
  $(".quizHome").hide();
  $("#quizGame").hide();
  var score = startTime;
  var initial = localStorage.getItem("initial");
  var score = localStorage.getItem("scores")
  $(".highScore").append(`
  <button onClick="window.location.reload();" class="btn btn-primary">Go Back</button>
  <h2>Player Scores:</h2>
  <ul>${initial},${startTime}</ul>
  <button>Clear All</button>
  `);
});
{/* <button type="submit" id="save" class="btn btn-primary">Save Score</button> */}
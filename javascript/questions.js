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
    startTime-15;
  }
});

function gameOver(){
    $("#quizGame").hide();
     $(".gameOver").show();
    $(".gameOver").append(`
    <h2>Game Over</h2>
    <h2>${score}</h2>
    <button onClick="window.location.reload();">Start Again!</button>
`)
     
}
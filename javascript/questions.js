var quiz = {
    questions: [
        {
            title: "Who is not part of the Avengers?",
            choices: ["SpiderMan","Batman","Thor","IronMan"],
            answer: "Batman"
        },
        {
            title:"What is the Highest Grossing film of all time?",
            choices:["Avengers: Endgame", "Titanic","Avatar", "Furious 7"],
            answer: 0
        },
        {
            title:"What sauce originated in Utah",
            choices:["Ketchup", "Mayonnaise", "Catsup", "Fry-Sauce"],
            answer: 3
        },
        {
            title:"What is the largest animal currently living in planet Earth",
            choices:["Tyannosaurus Rex","Elephant","Blue Whale","Terry Crews"],
            answer: 2
        },
        {
            title:"What is the Average student loan debt in 2018",
            choices:["$10,000", "$20,000", "$30,000","$40,000"],
            answer: 2
        },
    ],
    questionCounter: 0
}
var currentQuestion = quiz.questions[quiz.questionCounter];

function displayQuestion(){
    $("#questions").html(`<h3>${currentQuestion.title}</h3>`)

    for(var i =0; i < currentQuestion.choices.length; i++){
        $("#answerButtons").append(`
            <button id="answer-${i+1}" value=${currentQuestion.choices[i]}>
            ${currentQuestion.choices[i]}
            </button>
        `)
    }
}
$(document).on("click", "#answerButtons",function(){
    var currentQuestion = quiz.questions[quiz.questionCounter];
    var choice = $(this).val();
    if(choice === currentQuestion.answer){
        alert("well done");
    }
    // else{
    //     alert("you are wrong");
    // }
});
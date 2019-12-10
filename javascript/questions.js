$(startQuiz).click(function(){
    

    var questions = [
        {
            title: "Who is not part of the Avengers?",
            choices: ["SpiderMan","Batman","Thor","IronMan"],
            answer: "Batman"
        },
        {
            title:"What is the Highest Grossing film of all time? ",
            choices:["Avengers: Endgame", "Titanic","Avatar", "Furious 7"],
            answer:"Avengers: Endgame"
        },
        {
            title:"What sauce originated in Utah",
            choices:["Ketchup", "Mayonnaise", "Catsup", "Fry-Sauce"],
            answer:"Fry-Sauce"
        },
        {
            title:"What is the largest animal currently living in planet Earth",
            choices:["Tyannosaurus Rex","Elephant","Blue Whale","Terry Crews"],
            answer:"Blue Whale"
        },
        {
            title:"What is the Average student loan debt in 2018",
            choices:["$10,000", "$20,000", "$30,000","$40,000"],
            answer:"$30,000"
        }
    ]
    var quizQuestion = $("#quizGame")
    for(let i = 0; i < questions.length; i++){
        var quiz = questions[i];
        
        quizQuestion.append($(
        `<h3>${quiz.title}</h3><br>
                <button class="" id="answer1">${quiz.choices}</button>
                <button class="" id="answer2">${quiz.choices}</button>
                <button class="" id="answer3">${quiz.choices}</button>
                <button class="" id="answer4">${quiz.choices}</button>
            
    `))

    }

});
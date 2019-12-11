function startQuiz(){
//Parent to append the child to
    var quizQuestion = $("#quizGame")
    
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
    
    //This prints out whats inside of the array questions
    for(var i = 0; i < questions.length; i++){
        //converts from array to variable
        var quiz = questions[i];
        //adds children(quiz..) to the parent element(quizGame)
        quizQuestion.append($(
            `<h3>${quiz.title}</h3><br>
                <button class="" id="answer1">${quiz.choices[0]}</button>
                <button class="" id="answer2">${quiz.choices[1]}</button>
                <button class="" id="answer3">${quiz.choices[2]}</button>
                <button class="" id="answer4">${quiz.choices[3]}</button>
            `))
        
        $("#answer1, #answer2, #answer3, #answer4").click(function(){
            var rightAnswer = questions.answer;
            var multipleChoices = $("#answer1","#answer2","#answer3","#answer4")
            if(multipleChoices === rightAnswer){
                alert("You are right");
                    }
        });
    }

}
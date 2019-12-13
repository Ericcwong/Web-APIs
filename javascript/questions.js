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
    i=0;
    var quizQuestion = document.getElementById("title");
    var answer0 = document.getElementById("answer0")
    var answer1 = document.getElementById("answer1")
    var answer2 = document.getElementById("answer2")
    var answer3 = document.getElementById("answer3")

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
    

   document.getElementById("rows").addEventListener("click",function(){
    answerChecker();   
    displayQuestion();
    
   });

    // function displayEndGame(){
    //     document.getElementById("quizGame").hidden = true;
    //     clearInterval(timerInterval)
    //     // document.createElement(`h1`);
    //     // h1.innerText = "hello";
    // }


var correctAnswer = questions[i].answer;
function answerChecker(){
    correctAnswer === true;
    if(answer0.textContent === correctAnswer){
        alert("You are correct");
        return i++;
        }else{
            correctAnswer === false;
            alert("You are wrong");

        }
    if(answer1.textContent === correctAnswer){
        alert("You are correct");
         return i++;
    }else{
        alert("You are wrong");
    }
    if(answer2.textContent === correctAnswer){
        alert("You are correct");
        return i++;
    }else{
        alert("You are wrong");
    }
    if(answer3.textContent === correctAnswer){
        alert("You are correct");
        return i++;
    }else{
        alert("You are wrong");
    }
    debugger;
}
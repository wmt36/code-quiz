$(document).ready(function () {

    const questions = document.getElementById("questions");
    const start = document.getElementById("start");
    const next = document.getElementById("next");
    const choiceA = document.getElementById("choiceA");
    const choiceB = document.getElementById("choiceB");
    const choiceC = document.getElementById("choiceC");
    const choiceD = document.getElementById("choiceD");
    const quiz = document.getElementById("quiz");
    const timer = document.getElementById("timer");
    const progress = document.getElementById("progress");



    let questionsList = [{
        questions: "1. Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "boolians",
        choiceC: "alerts",
        choiceD: "numbers",
        correctAnswer: "B"
    }, {
        questions: "2. The Condiion in an if else statement is enclosed within?",
        choiceA: "Quotes",
        choiceB: "curly brackets",
        choiceC: "parenthasees",
        choiceD: "square brackets",
        correctAnswer: "C"
    }, {
        questions: "3. Arrays in JavaScript can be used to store?",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "boolians",
        choiceD: "all of the above",
        correctAnswer: "B"
    }, {
        questions: "4. A very useful tool used during development and debugging for printing content to the dubugger is?",
        choiceA: "JavaScriopt",
        choiceB: "terminal",
        choiceC: "for loops",
        choiceD: "console.log",
        correctAnswer: "C"
    }];



    var counter = 60;
    var zero = 0;
    const lastQuestion = questionsList.length - 1;
    let runningQuestion = 0;
    //nextQuestion();
    








    $("#start").click(function () {
        renderQuestion();
        quiz.style.display = "block";
        timer.innerHTML = counter;
        var interval = setInterval(timeIt, 1000);
        function timeIt() {
            counter--;
            timer.innerHTML = counter;
            if (counter == zero) {
                clearInterval(interval);
                counter = 0;
                
            }
        }


    });
    console.log(start);

    $("#next").on("click", renderQuestion);
    console.log(next);

    function renderQuestion(e){
       // e.preventDefault();
        
        let q = questionsList[runningQuestion];
        questions.innerHTML = "<p>" + q.questions + "</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
        runningQuestion++;
        console.log("renderQuestion")
    }


    // function nextQuestion() {
    //     for (i = 0; i < runningQuestion.length; i++)
    //         renderQuestion();
    // }

    start.style.display = "block";

    
    //renderProgress();





});
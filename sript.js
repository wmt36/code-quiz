const questions = document.getElementById("questions");
const start = document.getElementById("start");
const next = document.getElementById("next");
const previous = document.getElementById("prev");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");
const quiz = document.getElementById("quiz");
const timer = document.getElementById("counter");
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
},{
    questions: "4. A very useful tool used during development and debugging for printing content to the dubugger is?",
    choiceA: "JavaScriopt",
    choiceB: "terminal",
    choiceC: "for loops",
    choiceD: "console.log",
    correctAnswer: "C"
}];
const counter = 60;
const questionTime = 20; //20s per question
const lastQuestion = questionsList.length - 1;
let runningQuestion = 0;
runningQuestion;
renderQuestion();
renderCounter();



next.addEventListener("click", renderQuestion);
console.log(next)


function renderQuestion(){
    let q = questionsList[runningQuestion];
    questions.innerHTML = "<p>" + q.questions + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();

function renderCounter(){
    if (counter <= questionTime) {
        timer.innerHTML = counter;
        counter++
    }else{
        counter = 0;
    }
}
console.log(renderProgress);

function renderProgress() {
    for (let questions = 0; questions <= lastQuestion; questions++){
        progress.innerHTML += "<div id=" + questions + "></div>";
    }
}

function answerCorrect(){
    document.getElementById(runningQuestion).innerHTML = "Coreect!"
}

function answerWrong(){
    document.getElementById(runningQuestion).innerHTML = "Wrong Answer!"
}


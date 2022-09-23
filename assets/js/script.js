// Create variables to call document objects
var timerElement = document.querySelector(".timer-count");
var questionCard = document.querySelector(".question-card");
var questionsElement = document.querySelector(".questions");
var answersElement = document.querySelector(".answers");
var verify = document.querySelector(".verify");
var startElement = document.querySelector(".start");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;
var isDone = false;

// Create variables to house answer options
var answerList = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Style answers with letter icons
var circleA = document.createElement("div");
var circleB = document.createElement("div");
var circleC = document.createElement("div");
var circleD = document.createElement("div");

// Create clickable answer buttons
var answerA = document.createElement("button")
var answerB = document.createElement("button")
var answerC = document.createElement("button")
var answerD = document.createElement("button")


// Create an array with the questions, answers and correct answer for each
var questionList = [
    {
        question: "Which of the below will return the phrase 'My name is...' in the console window of the Chrome Dev Tools?",
        answers: {
            a: "console.log(My name is...);",
            b: "myNameIs();",
            c: "console.log('My name is...');",
            d: "var name = 'My name is';"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the below would return a result of 'true'?",
        answers: {
            a: "3 == '3'",
            b: "3 !== 3",
            c: "3 === '3'",
            d: "3 ! 3"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the below will give the user an option to click to proceed?",
        answers: {
            a: "alert('Do you want to proceed?');",
            b: "window.alert('Do you want to proceed?');",
            c: "console.log('Do you want to proceed?');",
            d: "confirm('Do you want to proceed?');"
        },
        correctAnswer: "d"
    },
    {
        question: "When used in JavaScript, what does the '||' symbol indicate?",
        answers: {
            a: "and",
            b: "or",
            c: "true",
            d: "false"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following 'if' statements should you use to create a condition when 'x' is equal to 5?",
        answers: {
            a: "if(x5)",
            b: "if(x = 5)",
            c: "if x = 5",
            d: "if(x == 5)"
        },
        correctAnswer: "d"
    },
    {
        question: "The following statement would be which kind of variable value: 'This is my variable'?",
        answers: {
            a: "String",
            b: "Number",
            c: "Boolean",
            d: "Function"
        },
        correctAnswer: "a"
    },
]

function startQuiz() {
// Sets timer count to 100
    timerCount = 100;
// Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startButton.setAttribute("style","display:none;")

// Calls timer function
    renderQuestions();
    startTimer();
}

function renderQuestions(){
// Style answers with letter icons
var circleA = document.createElement("div");
var circleB = document.createElement("div");
var circleC = document.createElement("div");
var circleD = document.createElement("div");

// Create clickable answer buttons
var answerA = document.createElement("button")
var answerB = document.createElement("button")
var answerC = document.createElement("button")
var answerD = document.createElement("button")

// Style radio icons
circleA.innerText = 'A';
circleA.setAttribute("class", "radio");
circleB.innerText = 'B';
circleB.setAttribute("class", "radio");
circleC.innerText = 'C';
circleC.setAttribute("class", "radio");
circleD.innerText = 'D';
circleD.setAttribute("class", "radio");

// Append elements to create clickable answer list
answersElement.appendChild(answerList);
answerList.appendChild(li1);
answerList.appendChild(li2);
answerList.appendChild(li3);
answerList.appendChild(li4);

li1.appendChild(circleA);
li2.appendChild(circleB);
li3.appendChild(circleC);
li4.appendChild(circleD);

li1.appendChild(answerA);
li2.appendChild(answerB);
li3.appendChild(answerC);
li4.appendChild(answerD);

// Style buttons
answerA.setAttribute("class", "answer-button");
answerB.setAttribute("class", "answer-button");
answerC.setAttribute("class", "answer-button");
answerD.setAttribute("class", "answer-button");

// Insert question and answer text
showQuestion();
// Create function to display questions
function showQuestion() {

// Clear verify text
verify.textContent = '';
index = 0;

let i = index;

    questionsElement.textContent = questionList[i].question;
    answerA.textContent = questionList[i].answers.a;
    answerB.textContent = questionList[i].answers.b;
    answerC.textContent = questionList[i].answers.c;
    answerD.textContent = questionList[i].answers.d;
}
// Create a function to verify the answer clicked
function verifyAnswerA () {
    if (index == 1 || index == 5) {
        answerA.setAttribute("style", "background-color: var(--green);");
        verify.textContent = "Correct!";
        verify.setAttribute("id", "correct");
        answerCorrect();
    } else {
        answerA.setAttribute("style", "background-color: var(--pink);");
        verify.textContent = "Wrong!";
        verify.setAttribute("id", "wrong");
        answerWrong();
    }
}

function verifyAnswerB () {
    if (index == 3) {
        answerB.setAttribute("style", "background-color: var(--green);");
        verify.textContent = "Correct!";
        verify.setAttribute("id", "correct");
        answerCorrect();
        return;
    } else {
        answerB.setAttribute("style", "background-color: var(--pink);");
        verify.textContent = "Wrong!";
        verify.setAttribute("id", "wrong");
        answerWrong();
        return;
    }
}

function verifyAnswerC () {
    if (index == 0) {
        answerC.setAttribute("style", "background-color: var(--green);");
        verify.textContent = "Correct!";
        verify.setAttribute("id", "correct");
        answerCorrect();
        return;
    } else {
        answerC.setAttribute("style", "background-color: var(--pink);");
        verify.textContent = "Wrong!";
        verify.setAttribute("id", "wrong");
        answerWrong();
        return;
    }
}

function verifyAnswerD () {
    if (index == 2 || index == 4) {
        answerD.setAttribute("style", "background-color: var(--green);");
        verify.textContent = "Correct!";
        verify.setAttribute("id", "correct");
        answerCorrect();
        return;
    } else {
        answerD.setAttribute("style", "background-color: var(--pink);");
        verify.textContent = "Wrong!";
        verify.setAttribute("id", "wrong");
        answerWrong();
        return;
    }

    
}
// Create event listener for answer clicks
answerA.addEventListener("click", function(event){
    event.stopPropagation();
    verifyAnswerA();
})
answerB.addEventListener("click", function(event){
    event.stopPropagation();
    verifyAnswerB();
})
answerC.addEventListener("click", function(event){
    event.stopPropagation();
    verifyAnswerC();
})
answerD.addEventListener("click", function(event){
    event.stopPropagation();
    verifyAnswerD();
})

}

function answerCorrect() {
    // Add 5 seconds to timer
    timerCount = timerCount + 5;
    // Check if this is the last question
    if (index == questionList.length) {
        isDone = true;
        return;
    } else {
    // Go to next question
    index ++;
    }
}

function answerWrong() {
    // Remove 5 seconds from timer
    timerCount = timerCount - 5;
    // Check if this is the last question
    if (index == questionList.length) {
        isDone = true;
        return;
    } else {
    // Go to next question
    index ++;
    }
}


// Starts the timer countdown
function startTimer() {
    // Sets timer
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            //tests if quiz has been won
            if (isDone && timerCount > 0) {
                winQuiz();
            }

        }
    },1000);

}

function winQuiz() {
    var score = timer
    clearInterval(score);

}

// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);
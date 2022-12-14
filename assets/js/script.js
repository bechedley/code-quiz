// Create variables to call document objects
var timerElement = document.querySelector(".timer-count");
var questionCard = document.querySelector(".question-card");
var questionsElement = document.querySelector(".questions");
var answersElement = document.querySelector(".answers");
var verify = document.querySelector(".verify");
var info = document.querySelector(".info");
var highscores = document.querySelector("#highscores");
var saveScore = document.querySelector(".saveScore")
var scoreForm = document.querySelector("#score-form");
var scoreUpdate = document.querySelector("#score-update");
var done = document.querySelector("#done");
var user = document.getElementById("user");
var submitButton = document.getElementById("submit");
var result = document.getElementById("result");
var leaderboard = document.getElementById("leaderboard");
var leaderboardText = document.querySelector("#leaderboard-text")
var startElement = document.querySelector(".start");
var heading = document.querySelector(".heading");
var scoreList = document.getElementById("score-list");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;
var isDone = false;
index = 0;
var scores = [];
// Set score to timer result
var scoreResult = timerCount;

// Set score input value to equal timer
result.setAttribute("value", scoreResult);


// Create variables to house answer options
var answerList = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Create answers with letter icons
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
questionCard.appendChild(answerList);
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

// Create a function to load saved scores on webpage load
function init() {

    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scores = storedScores;
      }
}

// Create function to start quiz
function startQuiz() {
// Sets timer count to 100
    timerCount = 50;
// Prevents start button from being clicked when round is in progress
    startButton.setAttribute("style", "display:none;")
    questionCard.setAttribute("style", "display:none;")
    saveScore.setAttribute("style", "display: none;")
    startButton.disabled = true;

// Calls timer function
    renderQuestion();
    startTimer();
}

// Create function to display questions
function renderQuestion() {
    questionCard.setAttribute("style", "visibility: visible;")

// Clear textContent and reset answer button formatting
verify.textContent = '';
answerA.textContent = '';
answerB.textContent = '';
answerC.textContent = '';
answerD.textContent = '';
answerA.setAttribute("style", "background-color: var(--light);");
answerB.setAttribute("style", "background-color: var(--light);");
answerC.setAttribute("style", "background-color: var(--light);");
answerD.setAttribute("style", "background-color: var(--light);");

let i = index;

// Insert question and answer text

    questionsElement.textContent = questionList[i].question;
    answerA.textContent = questionList[i].answers.a;
    answerB.textContent = questionList[i].answers.b;
    answerC.textContent = questionList[i].answers.c;
    answerD.textContent = questionList[i].answers.d;
}
// Create a function to verify the answer clicked
function verifyAnswerA () {
    if (index == 1 || index == 5) {
        // Format answer button to reflect result
        answerA.setAttribute("style", "background-color: var(--green);");
        verify.textContent = "Correct!";
        verify.setAttribute("id", "correct");
        // Two second delay to show result
        setTimeout(() => {  answerCorrect(); }, 1000);
    } else {
        // Format answer button to reflect result
        answerA.setAttribute("style", "background-color: var(--pink);");
        verify.textContent = "Wrong!";
        verify.setAttribute("id", "wrong");
        // Two second delay to show result
        setTimeout(() => {  answerWrong(); }, 1000);
    }
}

function verifyAnswerB () {
    if (index == 3) {
        answerB.setAttribute("style", "background-color: var(--green);");
        verify.textContent = "Correct!";
        verify.setAttribute("id", "correct");
        setTimeout(() => {  answerCorrect(); }, 1000);
        return;
    } else {
        answerB.setAttribute("style", "background-color: var(--pink);");
        verify.textContent = "Wrong!";
        verify.setAttribute("id", "wrong");
        setTimeout(() => {  answerWrong(); }, 1000);
        return;
    }
}

function verifyAnswerC () {
    if (index == 0) {
        answerC.setAttribute("style", "background-color: var(--green);");
        verify.textContent = "Correct!";
        verify.setAttribute("id", "correct");
        setTimeout(() => {  answerCorrect(); }, 1000);
        return;
    } else {
        answerC.setAttribute("style", "background-color: var(--pink);");
        verify.textContent = "Wrong!";
        verify.setAttribute("id", "wrong");
        setTimeout(() => {  answerWrong(); }, 1000);
        return;
    }
}

function verifyAnswerD () {
    if (index == 2 || index == 4) {
        answerD.setAttribute("style", "background-color: var(--green);");
        verify.textContent = "Correct!";
        verify.setAttribute("id", "correct");
        setTimeout(() => {  answerCorrect(); }, 1000);
        return;
    } else {
        answerD.setAttribute("style", "background-color: var(--pink);");
        verify.textContent = "Wrong!";
        verify.setAttribute("id", "wrong");
        setTimeout(() => {  answerWrong(); }, 1000);
        return;
    }

    
}
// Create event listener for answer clicks
answerA.addEventListener("click", function(event){
    event.stopPropagation();
    verifyAnswerA();
});
answerB.addEventListener("click", function(event){
    event.stopPropagation();
    verifyAnswerB();
});
answerC.addEventListener("click", function(event){
    event.stopPropagation();
    verifyAnswerC();
});
answerD.addEventListener("click", function(event){
    event.stopPropagation();
    verifyAnswerD();
});

// Create functions to action correct or incorrect results
function answerCorrect() {
    // Add 5 seconds to timer
    timerCount = timerCount + 5;
    // Check if this is the last question
    if (index == 5) {
        isDone = true;
        endQuiz();
        return;
    } else {
    // Go to next question
    index ++;
    renderQuestion();
    }
}

function answerWrong() {
    // Remove 5 seconds from timer
    timerCount = timerCount - 5;
    // Check if this is the last question
    if (index == 5) {
        isDone = true;
        endQuiz();
        return;
    } else {
    // Go to next question
    index ++;
    renderQuestion();
    }
}


// Starts the timer countdown
function startTimer() {
    // Sets timer
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
                clearInterval();
                endQuiz();
        }
    },1000);

}

function storeScores() {
    // Stringify and set key in localStorage to scores array
    localStorage.setItem("scores", JSON.stringify(scores));
  }

// Create an end quiz function to save scores
function endQuiz() {

    // Set score to timer result
    var scoreResult = timerCount;
    clearInterval(scoreResult);
    timerElement.setAttribute("style","display:none;")
    // Hide questions and info
    questionCard.setAttribute("style", "visibility: hidden;")
    info.setAttribute("style", "visibility: hidden;")
    // Move to score to top
    heading.after(saveScore);
    saveScore.setAttribute("style", "visibility: visible;");
    done.setAttribute("style", "visibility: visible;");
    user.setAttribute("style", "visibility: visible;");
    submitButton.setAttribute("style", "visibility: visible;");
    scoreUpdate.textContent = "Your final score is " + scoreResult;
    result.setAttribute("value", scoreResult);
}
    // Push save form inputs to array to save in local storage
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        
    var scoresText =  {
        user: user.value.trim(),
        result: result.value.trim()
    }; 

    if (scoresText === "") {
        return;
    }

    scores.push(scoresText);
    user.value = "";
    result.value = "";

    
    storeScores ();
    
    // Test functionality by logging array to console
    console.log(scores);
    
    renderScores();
    
    });

// Create function to render scores to the leaderboard
function renderScores() {
    // Update text content and move to top
    info.setAttribute("style", "visibility: hidden;")
    saveScore.setAttribute("style", "visibility: hidden;");
    done.setAttribute("style", "visibility: hidden;");
    user.setAttribute("style", "visibility: hidden;");
    submitButton.setAttribute("style", "visibility: hidden;");
    leaderboardText.textContent = "Highscores";

    // Add scores to leaderboard and clear Score List content
    heading.after(leaderboard);
    scoreList.innerHTML = '';

    leaderboard.appendChild(scoreList);

    // Create for loop to render each score result to a new line item
    for (var i = 0; i < scores.length; i++) {
        var score = scores[i];

    var scoreLi = document.createElement("li");
    scoreLi.setAttribute("id", "leaderboard");

    scoreLi.textContent = score.user + " ____scored____ " + score.result;
    scoreLi.setAttribute("data-index", i);

    scoreList.appendChild(scoreLi);

    }

    // Start quiz from leaderboard
    leaderboard.after(startButton);
    startButton.setAttribute("style", "display:visible;")
    questionCard.setAttribute("style", "display:none;")
    saveScore.setAttribute("style", "display: none;")
    startButton.disabled = false;
    startButton.textContent = "Try Again";

    // Attach event listener to reload page on click
    startButton.addEventListener("click", function(event) {
        event.preventDefault();
        location.reload();
    });

}


// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);

// Add event listener to View Highscores to call function to show leaderboard
highscores.addEventListener("click", renderScores);

// Load saved scores
init();
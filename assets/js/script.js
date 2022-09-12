var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;
var isDone = false;

// The startQuiz function is called when the start button is clicked
function startQuiz() {
    isDone = false;
    timerCount = 100;
    // Prevents start button from being clicked when quiz is in progress
    startButton.disabled = true;
    startTimer()
  }

  // The answerCorrect function is called when the answerCorrect condition is met
function answerCorrect() {
    validation.textContent = "Correct";
    scoreCounter++
    startButton.disabled = true;
    setScore();
    addTime();
  }
  
  // The answerWrong function is called when the answerWrong condition is met
  function answerWrong() {
    validation.textContent = "Wrong";
    startButton.disabled = true;
    reduceTime();
  }

  // The endQuiz function is called when the timer reaches 0 or all questions have been answered
  function endQuiz() {

  }

  // The startTimer function starts and stops the timer and triggers endQuiz
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
      // Tests if time has run out or quiz is over
      if ( isDone || timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }
  
// Attach event listener to start button to call startQuiz function on click
startButton.addEventListener("click", startQuiz);
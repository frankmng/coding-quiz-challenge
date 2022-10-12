var startButton = document.querySelector(".start-button");
var button = document.createElement('span');
var mainContainer = document.querySelector(".main-container")
var optionDisplay = document.querySelector(".option-container")
var questionDisplay = document.querySelector(".question-container")
var title = document.querySelector('.title');
var description = document.querySelector(".description");
var timerElement = document.querySelector('.timer-count');
var scoreDetails = document.querySelector(".score-details");
var scoreCount = document.querySelector(".score-count");
var submitScore = document.querySelector("#submit-score");
var quizSection = document.querySelector(".quiz-section");
var scoreSection = document.querySelector(".score-section");
var highScore = document.querySelector(".high-score");
var userScore = document.querySelector("#user-score");
var userInitial = document.querySelector("#user-initial");
var mainHeader = document.querySelector(".main-header")
var showScore = document.querySelector(".show-score")
var viewHighScores = document.querySelector(".view-high-scores")
var goBackButton = document.querySelector("#go-back")
var clearScoreButton = document.querySelector("#clear-scores")

// create main title element
var h1Title = document.createElement("h1");
h1Title.textContent = 'Coding Quiz Challenge';
title.appendChild(h1Title);

var hsTitle = document.createElement("h1");
hsTitle.textContent = 'High scores';
highScore.appendChild(hsTitle);
scoreSection.style.display = "none";

// create description element
var pInfo = document.createElement("p");
pInfo.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time \n by ten seconds!';
description.appendChild(pInfo);
scoreDetails.style.display = "none";

optionDisplay.style.display = "none";
button.textContent = "Start Quiz";
startButton.classList.add("start-button");
startButton.appendChild(button);
var timerCount = 75;
var score = 0;

// question object with id, question, and answer
const Questions = [{
    id: 0,
    q: "Arrays in JavaScript can be used to store _______.",
    a: [{ text: "1. Numbers and Strings", isCorrect: false },
             { text: "2. Other Arrays", isCorrect: false },
             { text: "3. Booleans", isCorrect: false },
             { text: "4. All of the Above", isCorrect: true }
            ]
    },
    {
    id: 1,
    q: "String values must be enclosed within ____ when being assigned to variables",
    a: [{ text: "1. Commas", isCorrect: false },
             { text: "2. Curly Brackets", isCorrect: false },
             { text: "3. Quotes", isCorrect: true },
             { text: "4. Parenthesis", isCorrect: false }
            ]
    },
    {
    id: 2,
    q: "Commonly used data types DO NOT include: ",
    a: [{ text: "1. Strings", isCorrect: false },
             { text: "2. Booleans", isCorrect: false },
             { text: "3. Alerts", isCorrect: true },
             { text: "4. Numbers", isCorrect: false }
            ]
    },  
    {  
    id: 3,
    q: "The condition of an if/else statement is enclosed with: ",
    a: [{ text: "1. Quotes", isCorrect: false },
             { text: "2. Curly Brackets", isCorrect: false },
             { text: "3. Parenthesis", isCorrect: true },
             { text: "4. Square Brackets", isCorrect: false }
            ]
    }, 
    {
    id: 4,
    q: "The condition of an if/else statement is enclosed with: ",
    a: [{ text: "1. Quotes", isCorrect: false },
             { text: "2. Curly Brackets", isCorrect: false },
             { text: "3. Parenthesis", isCorrect: true },
             { text: "4. Square Brackets", isCorrect: false }
            ]
    }
]


// Set start
var start = true;

function iterate(id) {
    // getting the result display section
    var result = document.getElementsByClassName("result");
    var css = ("style", " font-size: 32px;; border-top: 2px solid darkgray; font-style: italic; color: darkgray;");

    // getting the questions
    const question = document.getElementById("question");
  
  
    // setting up the questions text
    question.innerText = Questions[id].q;
  
    // getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    
  
    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", ()=>  {
    selected = op1.value;
    if (selected == "true") {
        result[0].setAttribute("style",css);
        result[0].innerHTML = "Correct!"; 
        score = score +1;
    } else {
        timerCount -= 10;
        result[0].setAttribute("style",css);
        result[0].innerHTML = "Wrong!";
    }
    next(id);
    })
  
    op2.addEventListener("click", () => {
        selected = op2.value;
        if (selected == "true") {
            result[0].setAttribute("style",css);
            result[0].innerHTML = "Correct!";
            score = score +1;
        } else {
            timerCount -= 10;
            result[0].setAttribute("style",css);
            result[0].innerHTML = "Wrong!";
        }
        next(id);
    })
  
    op3.addEventListener("click", () => {
        selected = op3.value;
        if (selected == "true") {
            result[0].setAttribute("style",css);
            result[0].innerHTML = "Correct!";
            score = score +1;
    
        } else {
            timerCount -= 10;
            result[0].setAttribute("style",css);
            result[0].innerHTML = "Wrong!";
        }
        next(id);
    })
  
    op4.addEventListener("click", () => {
        selected = op4.value;
        if (selected == "true") {
            result[0].setAttribute("style",css);
            result[0].innerHTML = "Correct!";
            score = score +1;

        } else {
            result[0].setAttribute("style",css);
            result[0].innerHTML = "Wrong!";
        }
        next(id);
    })
}

// navigates through the questions
function next(id) {
    if(id <3){
        id++;
        iterate(id);
    }
    else {
        questionDisplay.textContent = "";
        optionDisplay.textContent = "";
        timerElement.textContent = 0;
        scoreDetails.style.display = "block";
        scoreCount.textContent = score;
        clearInterval(timer)
        timerElement.textContent = timerCount;
    }
}

// starts the timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0){
        clearInterval(timer)
      }
      else if (timerCount < 0){
        timerElement.textContent = 0;
      }
    }, 1000);
  }

// starts the game
function startGame(){
    startTimer();
    iterate(0);
    optionDisplay.style.display = "block";
    title.style.display ="none";
    description.style.display ="none";
    startButton.style.display ="none";

}

// show high scores after quiz is done
function renderHighScores(){
    highScore.textContent = "High scores";
    scoreDetails.style.display = "none";
    quizSection.textContent = "";
    scoreSection.style.display = 'block';
    mainHeader.style.visibility = "hidden";
    var initial = localStorage.getItem("initial");
    var score = localStorage.getItem("score");
    userInitial.textContent = initial;
    userScore.textContent = score;
}

// return to main page
function returnHome() {
    scoreSection.textContent = "";
    h1Title.textContent = 'Coding Quiz Challenge';
    title.style.display ="block";
    description.style.display ="block";
    startButton.style.display ="block";
    mainHeader.style.visibility = "visible";
    timerCount = 75;
    timerElement.textContent = timerCount;
}

// clear scores
function clearScores() {
    localStorage.removeItem("initial");
    localStorage.removeItem("score");
    showScore.style.display = "none";
}

// view high scores
function viewScores() {
    highScore.textContent = "High scores";
    scoreDetails.style.display = "none";
    quizSection.textContent = "";
    scoreSection.style.display = 'block';
    mainHeader.style.visibility = "hidden";
    goBackButton.style.visibility = "hidden";
    clearScoreButton.style.visibility = "hidden";
    mainContainer.textContent = "";
    var initial = localStorage.getItem("initial");
    var score = localStorage.getItem("score");
    userInitial.textContent = initial;
    userScore.textContent = score;
}

goBackButton.addEventListener("click", returnHome);
clearScoreButton.addEventListener("click", clearScores)
viewHighScores.addEventListener("click", viewScores)
startButton.addEventListener("click", startGame)
submitScore.addEventListener("click", function(event) {
    event.preventDefault();
  
    var initial = document.querySelector("#score-initial").value;
    if (initial === "") {
      displayMessage("error", "initials cannot be blank");
    } else {
      localStorage.setItem("initial", initial);
      localStorage.setItem("score", score);
      renderHighScores();
    }
  });
  
  
  

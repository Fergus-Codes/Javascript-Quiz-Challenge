var startQuizButton = document.querySelector('#startbutton')
var timeLeft = document.querySelector ('#timeleft')
var questionSection = document.querySelector('#question-section')
var answerSection = document.querySelector('#answer-section')
var mainBodySection = document.querySelector('#main-body')
var questionLocation = document.querySelector('#questions')
var answerLocation = document.querySelector('#answers')

var buttonList1 = $('#buttons1');
var buttonList2 = $('#buttons2');
var buttonList3 = $('#buttons3');
var buttonList4 = $('#buttons4');

var answerButtons = document.querySelectorAll('.buttonstyling')
var answersButtons = $('<button>');
var vhsbutton = document.querySelector('#vhsbutton')
var down = document.getElementById('#answers');
var userHighScores = [];
var subButton = document.createElement("input");
var Initials = document.createElement("input");
var form = document.createElement("form");
var highscores = $('#highscorestable');


// Questions & Answers Variables:

// Question 1
    var question1 = "What are the datatypes supported by Javascript?";
    var answers1 = ["String, Number, Boolean, Object, Undefined", "Letters, Emoji's, Boolean, Object, Undefined", "Characters, String, Number, Decimals, Intergers"];
    var correctAnswer1 = "String, Number, Boolean, Object, Undefined" ; 
    

// Question 2
    var question2= "What are the scopes of a variable in JavaScript?";
    var answers2=["Universal Scope & Planetary Scope", "Total Scope & State Scope", "Global Scope & Local Scope"];
    var correctAnswer2 = "Global Scope & Local Scope";


// Question 3
    var question3 = "What is the difference between the operators ‘==‘ & ‘===‘?";
    var correctAnswer3= "== means vales equal too but does not account for data type whereas === means strictly equal too, which accounts for data type and value"; 
    var answers3= ["== means the vales and data types are equal, where as === means only the values are equal." , "== means vales equal too but does not account for data type whereas === means strictly equal too, which accounts for data type and value"];


// Question 4
    var question4 = "Which company developed JavaScript?";
    var correctAnswer ="Netscape";  
    var answers4 = ["Google", "Netscape", "Facebook", "IBM"]

startQuizButton.addEventListener('click', function (){

startQuizButton.setAttribute('style', 'display: none')

answerLocation.setAttribute('style', 'display: none')


var timerInterval = setInterval(function(){

secondsLeft --;

timeLeft.textContent = "Time: " + secondsLeft + " seconds left."

    if (secondsLeft <= 0) {

        clearInterval(timerInterval);        
        
        gameOver ()

        
    }

 return

}, 1000)

Q1()

})

vhsbutton.addEventListener('click', function(){

    var userHighScores = JSON.parse(localStorage.getItem("Scores"));

    questionLocation.textContent = "Highscores!!!"

    startQuizButton.setAttribute('style', 'display: none')

    answerLocation.setAttribute('style', 'display: none')

    for (var i = 0; i < userHighScores.length; i++) {

        var highScoresTable = $('<li>');
        
        highScoresTable.attr('data-answer', userHighScores[i])
        highScoresTable.text(userHighScores[i])
        highScoresTable.attr("style", "margin-left: 35%; font-size: 30px")
    }

    highscores.append(highScoresTable)
    
})
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


function Q1 () {

questionLocation.innerText = "What are the 5 datatypes supported by Javascript?"

for (var i = 0; i < answers1.length; i++) {

var answersButtons = $('<button>');

answersButtons.addClass('.buttonstyling')
answersButtons.attr('data-answer', answers1[i])
answersButtons.text(answers1[i])
answersButtons.on('click', function checkAnswer (event) {
    var target = event.target.innerText

    buttonList1.attr('style', 'display: none')
    
    if(target == correctAnswer1) {

        var correctAnswerText = $('<p>')
        correctAnswerText.text("Correct answer ✔️")
        correctAnswerText.attr("style", "margin-left: 40%; font-size: 20px")
        $('#answernotifications').empty().append(correctAnswerText)


    } else {
        var correctAnswerText = $('<p>')
        correctAnswerText.text("Incorrect answer ❌")
        correctAnswerText.attr("style", "margin-left: 40%; font-size: 20px")
        $('#answernotifications').empty().append(correctAnswerText)
        secondsLeft -= 15

    }
    
    Q2 ()

    })

buttonList1.append(answersButtons);



}}

function Q2 () {



questionLocation.innerText = "What are the scopes of a variable in JavaScript?"


for (var i = 0; i < answers2.length; i++) {

    var answersButtons = $('<button>');
    
    answersButtons.addClass('.buttonstyling')
    answersButtons.attr('data-answer', answers2[i])
    answersButtons.text(answers2[i])
    answersButtons.on('click', function checkAnswer (event) {

        buttonList2.attr('style', 'display: none')

        var target = event.target.innerText

        
        if(target == correctAnswer2) {
    
            var correctAnswerText = $('<p>')
            correctAnswerText.text("Correct answer ✔️")
            correctAnswerText.attr("style", "margin-left: 40%; font-size: 20px")
            $('#answernotifications').empty().append(correctAnswerText)
    
    
        } else {
            var correctAnswerText = $('<p>')
            correctAnswerText.text("Incorrect answer ❌")
            correctAnswerText.attr("style", "margin-left: 40%; font-size: 20px")
            $('#answernotifications').empty().append(correctAnswerText)
            secondsLeft -= 15
    
        }
        
       

        Q3 ()

        })

        buttonList2.append(answersButtons);
     
}}

function Q3 () {

    questionLocation.innerText = "What is the difference between the operators ‘==‘ & ‘===‘?"

for (var i = 0; i < answers3.length; i++) {
    
    var answersButtons = $('<button>');

    answersButtons.addClass('.buttonstyling')
    answersButtons.attr('data-answer', answers3[i])
    answersButtons.text(answers3[i])
    answersButtons.on('click', function checkAnswer (event) {

        buttonList3.attr('style', 'display: none')

        var target = event.target.innerText
    
    
        if(target == correctAnswer3) {
    
            var correctAnswerText = $('<p>')
            correctAnswerText.text("Correct answer ✔️")
            correctAnswerText.attr("style", "margin-left: 40%; font-size: 20px")
            $('#answernotifications').empty().append(correctAnswerText)
    
    
        } else {
            var correctAnswerText = $('<p>')
            correctAnswerText.text("Incorrect answer ❌")
            correctAnswerText.attr("style", "margin-left: 40%; font-size: 20px")
            $('#answernotifications').empty().append(correctAnswerText)
            secondsLeft -= 15
    
        }
        
        Q4 ()
        
        })

        buttonList3.append(answersButtons);
}}

function Q4 () {
console.log(answers4)
questionLocation.innerText = "Which company developed JavaScript?";

for (var i = 0; i < answers4.length; i++) {

    var answersButtons = $('<button>');
    
    answersButtons.addClass('.buttonstyling')
    answersButtons.attr('data-answer', answers4[i])
    answersButtons.text(answers4[i])
    answersButtons.on('click', function checkAnswer (event) {

        buttonList2.attr('style', 'display: none')

        var target = event.target.innerText
        
    
        if(target == correctAnswer1) {
    
            var correctAnswerText = $('<p>')
            correctAnswerText.text("Correct answer ✔️")
            correctAnswerText.attr("style", "margin-left: 40%; font-size: 20px")
            $('#answernotifications').empty().append(correctAnswerText)
            gameOver ()
    
    
        } else {
            var correctAnswerText = $('<p>')
            correctAnswerText.text("Incorrect answer ❌")
            correctAnswerText.attr("style", "margin-left: 40%; font-size: 20px")
            $('#answernotifications').empty().append(correctAnswerText)
            secondsLeft -= 15
            gameOver ()
        }
        clearInterval(timerInterval);
        gameOver ()
       
        })

buttonList4.append(answersButtons);

}}



// Click Event to start quiz //

$( "#quizstartbtn" ).click(function() {
  $("quiz").click();
});
 // variables 

var startup = document.getElementById("startup");
var quiz = document.getElementById("questionDiv");
var scores = document.getElementById("scoresDiv");
var question = document.getElementById("question")
var options1 = document.getElementById("a");
var options2 = document.getElementById("b");
var options3 = document.getElementById("c");
var options4 = document.getElementById("b");
var Points = document.getElementById("Points");
var seconds = 90;

//Questions
  var QuizQuestions = [
{
      question: "1.) Inside which HTML element do we put the JavaScript?",
      options: { 
        a: "java",
        b: "script",
        c: "HTML",
        d: "Element", 
      }, 
      correctAnswer: "b"

},
{
      question: "2.) Which are all JavaScript Data types?",
      options: { 
        a: "Number, String, Boolean, Object,Undefined",
        b: "scNumber, String, Typography, Object,Undefined",
        c: "Number, String, Boolean, Object, unknown",
        d: "Number, String, Boolean, JSON,Undefined", 
      }, 
      correctAnswer: "a"
}, 

{
      question: " 3.)What is 'this' keyword in JavaScript? ",
      options: { 
        a: "'This' keyword refers to the object called 'this'",
        b: "'This' keyword refers to the object from another function",
        c: "This' keyword refers to the object",
        d: "'This' keyword refers to the object from where it was called.", 
      }, 
      correctAnswer: "d"
},
]
console.log(QuizQuestions)


//functionaility 
var previousQuestion = questions.length - 1;
var displayedQuestions = 0;


function randomQuestions() {
    var randomQuestions = question[displayedQuestions];
    question.innerHTML = "<h5>" + randomQuestions.question + "</h5>";
    options1.innerHTML = randomQuestions.options1;
    options2.innerHTML = randomQuestions.options2;
    options3.innerHTML = randomQuestions.options3;
    options4.innerHTML = randomQuestions.options4;
}

function countDown() {
    var timeLeft = document.getElementById("time")
    var i = setInterval(function () {
        seconds--;
        var secondsString = seconds.toString();
        timeLeft.textContent = secondsString;
        if (seconds <= 0) {
            clearInterval(i);
            alert("Out of Time")
        } else if (previousQuestion === displayedQuestions) {
            clearInterval(i)
        }
    }, 1000);
}

document.getElementById("quizstartbtn").addEventListener("click", function startQuiz() {
  startup.style.display = "none";
    randomQuestions();
    quiz.style.display = "block"
    countDown();
});



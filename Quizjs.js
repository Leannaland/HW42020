
 // variables 

var startup = document.getElementById("quiz-header");
var quiz = document.getElementById("questionDiv");
var scores = document.getElementById("scoresDiv");
var question = document.getElementById("question")
var options1 = document.getElementById("a");
var options2 = document.getElementById("b");
var options3 = document.getElementById("c");
var options4 = document.getElementById("b");

function myFunction() {
  document.getElementById("quiz-header").style.display = "none";


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


}

//
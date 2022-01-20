var cardIndex = 0;


var cards = [
    {
        question: "question 1",
        answer: "answer 1"
    },
    {
        question: "question 2",
        answer: "answer 2"       
    },
    {
        question: "question 3",
        answer: "answer 3"   
    }
]

var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answer");
var answerButton = document.querySelector("#answer-button");
var nextButton = document.querySelector("#next-button");


function displayQuestion() {
    
       
    console.log("question");

    questionEl.innerHTML = "";

    var pTag = document.createElement("p");

    pTag.textContent = cards[cardIndex].question;

    questionEl.appendChild(pTag);

    cardIndex++;

}

function revealAnswer() {

    console.log("answer");

    var currentCard = cards[cardIndex];

    var currentAnswer = currentCard.answer;

    console.log(currentAnswer);

    var pTag = document.createElement("p");

    pTag.textContent = currentAnswer

    answerEl.appendChild(pTag);

}

answerButton.onclick = revealAnswer

nextButton.onclick = displayQuestion
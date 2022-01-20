var cardIndex = 0;
var currentCard = cards[cardIndex];

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
    
    for (var i = 0; i < cards.length; i++) {
    
        var pTag = document.createElement("p");

        pTag.textContent = cards[i].question;

        questionEl.appendChild(pTag);

        cardIndex++;

    }
    
}

function revealAnswer() {

    console.log("answer");

    currentCard.answer.setAttribute("class", "show");

}

answerButton.onclick = revealAnswer()

nextButton.onclick = displayQuestion()
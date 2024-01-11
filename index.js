const questions = [
    {
        question: "Who is the person standing next to you?",
        answers: [

            { text: "You", correct: "false" },
            { text: "Me", correct: "false" },
            { text: "The Next person", correct: "true" },
            { text: "Him", correct: "false" },

        ]
    },

    {
        question: "What makes you happy?",
        answers: [

            { text: "You", correct: "true" },
            { text: "Your lover", correct: "false" },
            { text: "Your enemy", correct: "false" },
            { text: "Your friends", correct: "false" },

        ]
    },

    {
        question: "How can I know you",
        answers: [

            { text: "Read about me", correct: "false" },
            { text: "Ask me", correct: "true" },
            { text: "Discover for yourself", correct: "false" },
            { text: "Ask around", correct: "false" },

        ]
    },

    {
        question: "Can I be your friend?",
        answers: [

            { text: "You don't have to ask", correct: "false" },
            { text: "It takes a lot to be my friend", correct: "false" },
            { text: "I am reasonably loyal", correct: "true" },
            { text: "Yes", correct: "false" },

        ]
    }

]


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer__buttons");
const nextButton = document.getElementById("next__btn");

// here we start the index from 0
let currentQuestionIndex = 0;
let score = 0;

// this function will the quiz
startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

//thids the function for showing the next question 
showQuestion = () => {
    // we first have to reset the state before we display the next question 
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// this function will take an event which will listen to the answer clicked 
selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        // here we disable the buttons after the click
        button.disabled = true;
    })
    // and then we show the next question button 
    nextButton.style.display = "block";
}

//this function will be excecuted when the questions are finished.
showScore = () => {
    resetState();
    questionElement.innerHTML = `Your score is: ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

// this function will be handling the next question button according to the consition 
handleNextButton = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// this will be calling the handleNextButton function providing we have not reach the end of the questions 
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
} )


startQuiz();
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
const answerButton = document.getElementById("answer__buttons");
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

showQuestion = () => {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();
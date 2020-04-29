const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'))
let questionCounterText = document.getElementById('questionCounter')
let scoreText = document.getElementById('score')

let currentQuestion = {};
let acceptingAnswers =false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question:'Where can you find the console log?',
        choice1: 'Inside the <script> tag',
        choice2: 'Webpage > Inspect > Console',
        choice3: 'VS Code settings',
        choice4: 'Inside the <head> tag',
        answer: 2
    },
    {
        question: 'What is lorem ipsum text?',
        choice1: 'CSS styling',
        choice2: 'Javascript source',
        choice3: 'Dummy text used in web design',
        choice4: 'Semantic HTML element',
        answer: 3

    },
    {
        question: 'What is jQuery related to?',
        choice1: 'Javascript',
        choice2: 'CSS',
        choice3: 'HTML',
        choice4: 'Github',
        answer: 1
    },
    {
        question: 'Which of the following has incorrect formatting:',
        choice1: '<script src=javascript.js></script>',
        choice2: 'const myFunction = () function {event}',
        choice3: '<h1>Hello World!</h1>',
        choice4: '<div class="myDiv"></div>',
        answer: 2
    },
    {
        question: 'What does "Command" + "/" do?',
        choice1: 'Opens settings',
        choice2: 'Creates element shortcuts',
        choice3: 'Opens developer tools',
        choice4: 'Comments out a line of code',
        answer: 4
    }
]

// Constants
const Correct_Bonus = 10;
const Max_Questions = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= Max_Questions){
        localStorage.setItem('mostRecentScore', score)
        // End Page
        return window.location.assign('end.html')
    }

    questionCounter++;
    questionCounterText.innerHTML = questionCounter + '/' + Max_Questions

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = 'incorrect'
            if (selectedAnswer == currentQuestion.answer) {
                classToApply = 'correct'
            }

            if (classToApply === 'correct') {
                incrementScore(Correct_Bonus)
            }
        
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerHTML = score
}


startGame();

const questions = [{
    'que' : 'Javascript is an _______ language?',
    'a' : 'Object-Oriented',
    'b': 'Object-Based',
    'c': 'Procedural',
    'd': 'None of the above',
    'correct': 'a'
}, {
    'que' : 'Which of the following keywords is used to define a variable in Javascript?',
    'a' : 'var',
    'b': 'let',
    'c': 'Both A and B',
    'd': 'None of the above',
    'correct': 'c'
}, {
    'que' : 'Upon encountering empty statements, what does the Javascript Interpreter do?',
    'a' : 'Throws an error',
    'b': 'Ignores the statements',
    'c': 'Gives a warning',
    'd': 'None of the above',
    'correct': 'b'
}, {
    'que' : 'Which of the following methods can be used to display data in some form using Javascript?',
    'a' : 'document.write()',
    'b': 'console.log()',
    'c': 'window.alert()',
    'd': 'All of the above',
    'correct': 'd'
}, {
    'que' : 'What keyword is used to check whether a given property is valid or not?',
    'a' : 'in',
    'b': 'is in',
    'c': 'exists',
    'd': 'lies',
    'correct': 'a'
} ]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index == total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if(ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> Thankyou for playing the quiz</h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `
}

// initial call
loadQuestion();

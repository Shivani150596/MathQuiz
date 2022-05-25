let counter = 3;
let numberofQuiz;
let quizQuestions = new Array();
let scoreboard1 = 0;
let n1;
let n2;
let sign;
let operatorArray = ['+', '*', '-', '/'];
let maxOperand;
let totalscoreboard = 0;
document.getElementById("quizbox").classList.add('demodisplay');
let operatorArray1;
let startQuiz1 = false;

document.getElementById("score-board-container").classList.add('demodisplay');
document.getElementById("scoreboard1").classList.add('demodisplay');
document.getElementById("scoreboard2").classList.add('demodisplay');
// Quiz 2

let counter2 = 3;
let numberofQuiz2;
let quizQuestions2 = new Array();
let scoreboard2 = 0;
let operand1;
let operand2;
let operator2;
let maxOperand2;
let operatorArray2;
let startQuiz2 = false;
document.getElementById("quizbox2").classList.add('demodisplay');

function timer() {
    scoreboard1 = 0;
    quizQuestions = [];
    let noOperadns = document.getElementById('enteredoperandValue').value;
    console.log("noOperadns", noOperadns)
    let noofQuizes = document.getElementById('enteredNumQuiz').value;
    var array = [];

    var checkboxes = document.querySelectorAll('#firstQuizoperators input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
        array.push(checkboxes[i].value)
    }

    console.log("checkboxes", checkboxes);
    console.log("array", array);

    numberofQuiz = noofQuizes ? noofQuizes : 20;
    maxOperand = noOperadns ? noOperadns : 9;
    operatorArray1 = array.length ? array : operatorArray;

    document.getElementById('startquizbuton').style.display = "none";


    let intervalcounter = setInterval(function () {
        if (counter == 0) {
            clearInterval(intervalcounter);
            document.getElementById("quizbox").classList.remove('demodisplay');
            document.getElementById("quizbox").classList.add('demodisplayblock');
            document.getElementById("header").innerHTML = " Final Score :" + totalscoreboard;
            startQuiz1 = true;
            changeQuiz();
            numberofQuiz--;
            letsPlayQuiz();
            document.getElementById('timer').style.display = "none";
            return;
        }
        // console.log(counter);
        document.getElementById('timer').innerText = "Quiz will starts in " + counter + "s";
        counter--;
    }, 1000);
}

function letsPlayQuiz() {
    let intervalQuiz = setInterval(function () {
        checkAns();
        if (numberofQuiz == 0) {
            clearInterval(intervalQuiz);
            document.getElementById("quiz-box1").classList.add('demodisplay');
            document.getElementById("score-board-container").classList.add('demodisplayblock');
            document.getElementById("scoreboard1").classList.add('demodisplayblock');
            showScoreBoard();
            return;
        }
        changeQuiz();
        numberofQuiz--;
    }, 3000);
}



function changeQuiz() {

    
        if (numberofQuiz == 0) {
            document.getElementById('operand1').value = ''
            document.getElementById('operand2').value = ''
            document.getElementById('operator').value = ''
        } else {
            n1 = Math.floor(Math.random() * maxOperand + 1);
            n2 = Math.floor(Math.random() * maxOperand + 1);
            sign = Math.floor(Math.random() * operatorArray.length);


            document.getElementById('operand1').value = n1
            document.getElementById('operand2').value = n2
            document.getElementById('operator').value = operatorArray[sign];
            console.log("numberofQuiz", numberofQuiz);
        }
    

 

}



function checkAns() {
    console.log("n1 && n2", n1, n2)
    if (n1 !== null && n2 !== null) {
        let userAns = document.getElementById('userEntered').value
        let combinedString = n1 + operatorArray[sign] + n2;
        let evaluatedAns = Math.floor(eval(combinedString));
        document.getElementById('userEntered').value = '';
        console.log("userAns", userAns)
        console.log("combinedString", combinedString);
        console.log("evaluatedAns", evaluatedAns);
        let check = '' == 0 ? 'true' : 'false'
        console.log(check)
        if (userAns && (userAns == evaluatedAns)) {
            scoreboard1++;
            totalscoreboard = scoreboard2 + scoreboard1;
            document.getElementById("header").innerHTML = " Final Score :" + totalscoreboard;
        }
        let obj = {
            ques: combinedString,
            correctAns: evaluatedAns,
            color: ((userAns ? userAns : undefined) == evaluatedAns) ? 'green' : 'red'
        }
        quizQuestions.push(obj);
        console.log(quizQuestions);

    }
}

function nextClicked() {
    if (numberofQuiz == 0) {
    } else {
        checkAns();
        changeQuiz();
        numberofQuiz--;
    }
}

function showScoreBoard() {
    var quoteContainer = document.getElementById("scoreboard1");
    for (var i = 0; i < quizQuestions.length; i++) {
        var name = " Quiz : " + quizQuestions[i].ques + " = " + quizQuestions[i].correctAns;
        var li = document.createElement('li');
        li.innerHTML = name;
        li.style.color = quizQuestions[i].color;
        quoteContainer.appendChild(li);
    }

    var quoteContainer = document.getElementById("score1").innerText = `Total Score : ${scoreboard1}`;


}



// Quiz 2
function timer2() {
    scoreboard2 = 0;
    quizQuestions2 = [];
    let noOperadns = document.getElementById('enteredoperandValue2').value;
    let noofQuizes = document.getElementById('enteredNumQuiz2').value;
    var array = [];

    var checkboxes = document.querySelectorAll('#secondQuizoperators input[type=checkbox]:checked')
    console.log("checkboxes", checkboxes)

    for (var i = 0; i < checkboxes.length; i++) {
        array.push(checkboxes[i].value)
    }

    console.log("checkboxes", checkboxes);
    console.log("array", array);

    numberofQuiz2 = noofQuizes ? noofQuizes : 20;
    maxOperand2 = noOperadns ? noOperadns : 9;
    operatorArray2 = array.length ? array : operatorArray;

    document.getElementById('startquizbuton2').style.display = "none";


    let intervalcounter = setInterval(function () {
        if (counter2 == 0) {
            clearInterval(intervalcounter);
            document.getElementById("quizbox2").classList.remove('demodisplay');
            document.getElementById("quizbox2").classList.add('demodisplayblock');
            document.getElementById("header").innerHTML = " Final Score :" + totalscoreboard;
            startQuiz2 = true;
            changeQuiz2();
            numberofQuiz2--;
            letsPlayQuiz2();
            document.getElementById('timer2').style.display = "none";
            return;
        }
        // console.log(counter);
        document.getElementById('timer2').innerText = "Quiz will starts in " + counter2 + "s";
        counter2--;
    }, 1000);
}

function changeQuiz2() {

    if (numberofQuiz2 == 0) {
        document.getElementById('operd2quiz1').value = ''
        document.getElementById('operd2quiz2').value = ''
        document.getElementById('operd2quiz').value = ''
    } else {
        operand1 = Math.floor(Math.random() * maxOperand2 + 1);
        operand2 = Math.floor(Math.random() * maxOperand2 + 1);
        operator2 = Math.floor(Math.random() * operatorArray2.length);


        document.getElementById('operd2quiz1').value = operand1
        document.getElementById('operd2quiz2').value = operand2
        document.getElementById('operd2quiz').value = operatorArray[operator2];
        console.log("numberofQuiz2", numberofQuiz2);
    }


}

function letsPlayQuiz2() {
    let intervalQuiz = setInterval(function () {
        checkAns2();
        if (numberofQuiz2 == 0) {
            clearInterval(intervalQuiz);
            document.getElementById("quiz-box2").classList.add('demodisplay');
            document.getElementById("score-board-container").classList.add('demodisplayblock');
            document.getElementById("scoreboard2").classList.add('demodisplayblock');
            showScoreBoard2();
            return;
        }
        changeQuiz2();
        numberofQuiz2--;
    }, 3000);
}


function checkAns2() {
    console.log("operand1 && operand2", operand1, operand2)
    if (operand1 !== null && operand2 !== null) {
        let userAns = document.getElementById('userEntered2').value
        let combinedString = operand1 + operatorArray[operator2] + operand2;
        let evaluatedAns = Math.floor(eval(combinedString));
        document.getElementById('userEntered2').value = '';
        console.log("userAns", userAns)
        console.log("combinedString", combinedString);
        console.log("evaluatedAns", evaluatedAns);
        if (userAns && (userAns == evaluatedAns)) {
            scoreboard2++;
            totalscoreboard = scoreboard2 + scoreboard1;
            document.getElementById("header").innerHTML = " Final Score :" + totalscoreboard;
        }
        let obj = {
            ques: combinedString,
            correctAns: evaluatedAns,
            color: ((userAns ? userAns : undefined) == evaluatedAns) ? 'green' : 'red'
        }
        quizQuestions2.push(obj);
        console.log(quizQuestions);

    }
}

function nextClicked2() {
    if (numberofQuiz2 == 0) {
    } else {
        checkAns2();
        changeQuiz2();
        numberofQuiz2--;
    }
}

function showScoreBoard2() {
    var quoteContainer = document.getElementById("scoreboard2");
    for (var i = 0; i < quizQuestions2.length; i++) {
        var name = " Quiz : " + quizQuestions2[i].ques + " = " + quizQuestions2[i].correctAns;
        var li = document.createElement('li');
        li.innerHTML = name;
        li.style.color = quizQuestions2[i].color;
        quoteContainer.appendChild(li);
    }

    var quoteContainer = document.getElementById("score2").innerText = `Total Score : ${scoreboard2}`;


}

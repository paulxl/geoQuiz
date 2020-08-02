/* dealing with the questions and results of quiz  */
/* answers to q's are as follows: 1|c   2|a    3|b   4|d    5|a    6|    7|    8|    9|   10|     */
let score = 0;
const radioArr = ['1a', '1b', '1c', '1d', '1e',
    '2a', '2b', '2c', '2d', '2e',
    '3a', '3b', '3c', '3d', '3e',
    '4a', '4b', '4c', '4d', '4e',
    '5a', '5b', '5c', '5d', '5e',
    '6a', '6b', '6c', '6d', '6e'
];

let btn2 = document.getElementById('resetRadio');
btn2.addEventListener('click', () => {
    radioArr.forEach(function(id) {
        document.getElementById(id).checked = false;
    });
    return false;
});


let btn1 = document.getElementById('getResults');
btn1.addEventListener('click', () => {

    let one = document.getElementsByName('answer1');
    one.forEach((answer1) => {
        if (answer1.checked) {
            if (answer1.value === '1c') {
                score++;
            }
        }
    });
    let two = document.getElementsByName('answer2');
    two.forEach((answer2) => {
        if (answer2.checked) {
            if (answer2.value === '2a') {
                score++;
            }
        }
    });
    let three = document.getElementsByName('answer3');
    three.forEach((answer3) => {
        if (answer3.checked) {
            if (answer3.value === '3b') {
                score++;
            }
        }
    });
    let four = document.getElementsByName('answer4');
    four.forEach((answer4) => {
        if (answer4.checked) {
            if (answer4.value === '4d') {
                score++;
            }
        }
    });
    let five = document.getElementsByName('answer5');
    five.forEach((answer5) => {
        if (answer5.checked) {
            if (answer5.value === '5a') {
                score++;
            }
        }
    });
    let six = document.getElementsByName('answer6');
    six.forEach((answer6) => {
        if (answer6.checked) {
            if (answer6.value === '6c') {
                score++;
            }
        }
    });
    console.log(score);
});
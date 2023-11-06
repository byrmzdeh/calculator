const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');
let sonInput = '';
let sonNetice = 0;
let operator = null;

function hesabla() {
    const num1 = parseFloat(sonNetice);  //reqemleri number edirik ki hesablaya bilsin
    const num2 = parseFloat(sonInput);

    switch (operator) {  //null olan operator deyerine asagidakilardan hansi menimsedilse o case yerine yetirilecek
        case '+':
            sonNetice = num1 + num2;
            break;
        case '-':
            sonNetice = num1 - num2;
            break;
        case '*':
            sonNetice = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                sonNetice = num1 / num2;
            } else {
                input.value = 0;
            }
            break;
        case '%':
            sonNetice = (num1 * num2) / 100;
            break;
        default:  //eger bunlardan hec bir sert yoxdusa sonuncu yazilan reqeme menimsedirik neticeni
            sonNetice = num2;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        if (button.textContent === 'C') {
            input.value = 0;
            operator = null
            sonInput = ''
        } else if (button.textContent === 'Del') {
            sonInput = sonInput.slice(0, -1);  //soninputu slice ede bilek die string-e beraber etmisdik
            input.value = sonInput;  //input-un value-su da string edirik
        } else if (button.textContent === '=') {
            if (operator) {
                hesabla();
                input.value = sonNetice;
            }
        } else if (['+', '-', '*', '/', '%'].includes(button.textContent)) {  //eger button-un daxilinde bu operatorla varsa hesabla funksiyasini cagir . 
            if (operator) {
                hesabla();
            }
            operator = button.textContent;
            sonNetice = sonInput; //number olan neticeni string edirik 
            sonInput = '';
        } else {
            sonInput += button.textContent;  //string olsun ki input her buttona klick eliyende yazilanlar yaninda yazila bilsin
            input.value = sonInput;
        }
    });
});


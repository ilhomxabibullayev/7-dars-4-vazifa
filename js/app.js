let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', function () {
        let buttonText = button.innerText;

        if (buttonText === 'C') {
            currentInput = '';
            display.value = currentInput;
        } else if (buttonText === '=') {
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            currentInput += buttonText;
            display.value = currentInput;
        }
    });
});
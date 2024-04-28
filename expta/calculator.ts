function showGreeting() {

    var name = prompt("Enter your name:");
    if (name) {
        var greeting = "Congratulations " + name + "!" + " You have successfully implemented the sum.";
        var greetingElement = document.getElementById("greeting");
        if (greetingElement) {
            greetingElement.textContent = greeting;
        }
    }
}

function showCalculator() {
    var calculatorElement = document.getElementById("calculator");
    if (calculatorElement) {
        calculatorElement.style.display = "block";
    }
}

function addToInput(value: string) {
    var inputField = document.getElementById("input") as HTMLInputElement | null;
    if (inputField) {
        var currentValue = inputField.value;

        switch (value) {
            case 'AC':
                inputField.value = '';
                break;
            case '=':
                try {
                    inputField.value = eval(currentValue).toString();
                } catch (error) {
                    inputField.value = 'Error';
                }
                break;
            default:
                inputField.value += value;
        }
    }
}

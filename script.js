const display = document.getElementById("display");
const buttons = document.querySelectorAll('.buttons button');

function appendDisplay(value) {
    display.value += value;
}

// clear desplay
function clearDisplay() {
    display.value = '';
}

 // Remove the last character
function deleteLast() {
    display.value = display.value.slice(0, -1); 
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Simulate button press based on key pressed
    for (let button of buttons) {
        if (button.getAttribute('data-value') === key) {
            button.click();
        }
    }

    // Map the 'Enter' key to the '=' button
    if (key === 'Enter') {
        calculate();
    }

    // Map the 'Escape' key to the 'C' button
    if (key === 'Escape'|| key == 'c' || key == 'C') {
        clearDisplay();
    }
    if (key === 'Delete'|| key ==='Backspace') {
        deleteLast();
    }
});


function checkNumber() {
    const number = document.getElementById('numberInput').value; // Get the input value
    const resultElement = document.getElementById('result'); // Get the element to display result

    if (number === '') {
        resultElement.textContent = 'Please enter a number.';
        return;
    }

    if (number % 2 === 0) {
        resultElement.textContent = `${number} is an even number.`;
    } else {
        resultElement.textContent = `${number} is an odd number.`;
    }
}

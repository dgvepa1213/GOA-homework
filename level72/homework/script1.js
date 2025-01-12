function checkTemperature() {
    const temperature = document.getElementById('temperatureInput').value; // Get the input value
    const resultElement = document.getElementById('result'); // Get the element to display result

    if (temperature === '') {
        resultElement.textContent = 'Please enter a temperature.';
        return;
    }

    if (temperature <= 0) {
        resultElement.textContent = `The temperature of ${temperature}°C is cold.`;
    } else if (temperature > 0 && temperature <= 25) {
        resultElement.textContent = `The temperature of ${temperature}°C is moderate.`;
    } else {
        resultElement.textContent = `The temperature of ${temperature}°C is hot.`;
    }
}

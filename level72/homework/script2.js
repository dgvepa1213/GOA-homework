function determineGrade() {
    const score = document.getElementById('scoreInput').value; // Get the input value
    const resultElement = document.getElementById('result'); // Get the element to display the result

    if (score === '') {
        resultElement.textContent = 'Please enter a score.';
        return;
    }

    if (score >= 90 && score <= 100) {
        resultElement.textContent = `Your grade is A.`;
    } else if (score >= 80 && score < 90) {
        resultElement.textContent = `Your grade is B.`;
    } else if (score >= 70 && score < 80) {
        resultElement.textContent = `Your grade is C.`;
    } else if (score >= 60 && score < 70) {
        resultElement.textContent = `Your grade is D.`;
    } else if (score >= 0 && score < 60) {
        resultElement.textContent = `Your grade is F.`;
    } else {
        resultElement.textContent = 'Please enter a valid score between 0 and 100.';
    }
}

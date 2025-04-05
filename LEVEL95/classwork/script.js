function getCentury(year) {
    return Math.ceil(year / 100);
}

console.log(getCentury(2023)); // Output: 21
console.log(getCentury(1900)); // Output: 19
console.log(getCentury(45));   // Output: 1
function sumTwoSmallestNumbers(numbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b);
    return sortedNumbers[0] + sortedNumbers[1];
}

// Example usage:
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // Output: 7
//////////////////

var isSquare = function(n) {
    return n >= 0 && Number.isInteger(Math.sqrt(n));
};

// Example usage:
console.log(isSquare(4));  // Output: true (because 2 * 2 = 4)
console.log(isSquare(5));  // Output: false (not a perfect square)
console.log(isSquare(9));  // Output: true (because 3 * 3 = 9)
console.log(isSquare(-1)); // Output: false (negative numbers can't be perfect squares)

///////////

function replace(s) {
    return s.replace(/[aeiouAEIOU]/g, '*');
}

// Example usage:
console.log(replace("Hello World")); // Output: "H*ll* W*rld"
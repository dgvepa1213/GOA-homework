function switchItUp(number) {
    return number === 0 ? "Zero" :
           number === 1 ? "One" :
           number === 2 ? "Two" :
           number === 3 ? "Three" :
           number === 4 ? "Four" :
           number === 5 ? "Five" :
           number === 6 ? "Six" :
           number === 7 ? "Seven" :
           number === 8 ? "Eight" :
           number === 9 ? "Nine" :
           "Invalid input";
}

console.log(switchItUp(5)); // Output: "Five"
console.log(switchItUp(9)); // Output: "Nine"
console.log(switchItUp(11)); // Output: "Invalid input"

/////////////////////////////////////////////////////

function getGrade(s1, s2, s3) {
    let avg = (s1 + s2 + s3) / 3;
    return avg >= 90 ? 'A' :
           avg >= 80 ? 'B' :
           avg >= 70 ? 'C' :
           avg >= 60 ? 'D' : 'F';
}

// Test cases
console.log(getGrade(95, 90, 93)); // Output: 'A'
console.log(getGrade(85, 87, 82)); // Output: 'B'
console.log(getGrade(72, 75, 70)); // Output: 'C'
console.log(getGrade(60, 65, 62)); // Output: 'D'
console.log(getGrade(50, 55, 58)); // Output: 'F'

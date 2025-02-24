function solution(str) {
    return str.split('').reverse().join('');
}
console.log(solution("world")); // Output: "dlrow"
console.log(solution("word"));  // Output: "drow"
console.log(solution("hello")); // Output: "olleh"

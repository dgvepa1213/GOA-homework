function mouthSize(animal) {
    return animal.toLowerCase() === "alligator" ? "small" : "wide";
}

// Example usage:
console.log(mouthSize("Alligator")); // Output: small
console.log(mouthSize("Frog"));      // Output: wide


//////////////////


function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000;
  }
  
  // Example usage:
  console.log(past(0, 1, 1)); // 61000 milliseconds
  console.log(past(1, 0, 0)); // 3600000 milliseconds
  console.log(past(0, 0, 0)); // 0 milliseconds
  
  ////////////////////////////////////////



  function replace(s) {
    return s.replace(/[aeiouAEIOU]/g, '!');
  }
  
  // Example usage:
  console.log(replace("Hello World!")); // "H!ll! W!rld!"
  
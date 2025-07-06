function greetUser(name = "Guest") {
  // If an empty string is passed, treat it as no name
  if (name === "") {
    name = "Guest";
  }
  return `Hello, ${name}!`;
}

// Function calls
console.log(greetUser("MasterJaneza")); // ➜ Hello, MasterJaneza!
console.log(greetUser(""));             // ➜ Hello, Guest!
console.log(greetUser());               // ➜ Hello, Guest!
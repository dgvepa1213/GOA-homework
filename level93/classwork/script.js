
let fruits = ["apple", "orange", "lemon", "banana"];
let citrus = fruits.slice(1, 3); 
console.log("Citrus array:", citrus); 
fruits.splice(-2, 2, "fig"); 
console.log("Modified fruits array:", fruits); 
let fruitString = fruits.join("-"); 
console.log("Fruit string:", fruitString); // Output: "apple-orange-fig"
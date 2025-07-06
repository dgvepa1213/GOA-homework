
const user = {
  name: "Ana",
  age: 25,
  country: "Georgia"
};

for (let key in user) {
  console.log(key + ": " + user[key]); 
}
// for...in გადის ყველა key-ზე ობიექტში



const colors = ["red", "green", "blue"];


for (let color of colors) {
  console.log(color);
}
// for...of გადის თითოეულ მნიშვნელობაზე მასივში


function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet();        
greet("Nika"); 

// თუ ფუნქციას არგუმენტი არ გადაეცა,
// name მიიღებს default მნიშვნელობას "Guest"



const add = (a, b) => a + b;

console.log(add(5, 3)); 


//დაწეროს ფუნქცია მოკლე და თანამედროვე სტილში


// Arrow function იყენებს => სიმბოლოს

// ფუნქცია აბრუნებს a + b-ს



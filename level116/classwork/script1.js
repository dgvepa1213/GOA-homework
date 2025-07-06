//Destructuring
 const fruits = ["ვაშლი", "მსხალი", "ბანანი"];
let [a, b, c] = fruits;
console.log(a); 
/////////
const person = { name: "თემო", age: 30 };
let { name: fullName, age: years } = person;
console.log(fullName); 
////////
const settings = { theme: "dark" };
let { theme, fontSize = "14px" } = settings;
console.log(fontSize);

/////

//Array

let days = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი"];
console.log(days[1]); 
//////////

let numbers = [1, 2];
numbers.push(3);
console.log(numbers); 
///////
let colors = ["წითელი", "ლურჯი"];
colors.forEach(color => console.log(color.toUpperCase()));
////
 
//o=Obj

let student = {
  name: "ლუკა",
  grade: "A",
  getInfo: function() {
    return `${this.name} მიღებული აქვს შეფასება: ${this.grade}`;
  }
};

console.log(student.getInfo());
///////

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log(car);
////
let user = {
  name: "ანა"
};

user.age = 27;           
user.name = "ანასტასია";  

console.log(user);
const fruits = ["banana", "watermelon", "strawberry", "kiwifruit", "pineapple", "apple", "blueberry"];

const result = fruits.find(fruit => fruit.length > 7 && fruit.length < 11);

console.log(result);
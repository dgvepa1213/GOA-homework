function findMax(a, b, c) {
    return Math.max(a, b, c);
}

// ფუნქციის ტესტირება
console.log(findMax(5, 8, 2));  // 8
console.log(findMax(10, 3, 7)); // 10
console.log(findMax(-1, -5, 0)); // 0
//////////////////////////////////////

function isEven(number) {
    return number % 2 === 0;
}

// ფუნქციის ტესტირება
console.log(isEven(4));  // true
console.log(isEven(7));  // false
console.log(isEven(0));  // true
console.log(isEven(-2)); // true
console.log(isEven(-3)); // false

//////////////////////////////


function multiplyNumbers(start, end) {
    if (start > end) return "არასწორი შეყვანა"; // თუ start უფრო დიდია, ვიდრე end

    let product = 1;
    for (let i = start; i <= end; i++) {
        product *= i;
    }
    return product;
}

// ფუნქციის ტესტირება
console.log(multiplyNumbers(1, 5));  // 1 * 2 * 3 * 4 * 5 = 120
console.log(multiplyNumbers(3, 6));  // 3 * 4 * 5 * 6 = 360
console.log(multiplyNumbers(4, 4));  // 4 (რადგან მხოლოდ ერთი რიცხვია)
console.log(multiplyNumbers(6, 3));  // "არასწორი შეყვანა"
////////////////////////////////////////////////////////


function findMin(a, b, c) {
    return a < b ? (a < c ? a : c) : (b < c ? b : c);
}

// ფუნქციის ტესტირება
console.log(findMin(5, 8, 2));  // 2
console.log(findMin(10, 3, 7)); // 3
console.log(findMin(-1, -5, 0)); // -5
console.log(findMin(4, 4, 4));  // 4
/////////////////////////////////////////

function calculateSum(n) {
    let sum = 0;
    
    switch (true) {
        case n < 1:
            return "შეიყვანეთ 1 ან მეტი რიცხვი";
        default:
            for (let i = 1; i <= n; i++) {
                sum += i;
            }
            return sum;
    }
}

// ფუნქციის ტესტირება
console.log(calculateSum(5));  // 1 + 2 + 3 + 4 + 5 = 15
console.log(calculateSum(10)); // 55
console.log(calculateSum(1));  // 1
console.log(calculateSum(0));  // "შეიყვანეთ 1 ან მეტი რიცხვი"
console.log(calculateSum(-3)); // "შეიყვანეთ 1 ან მეტი რიცხვი"


  

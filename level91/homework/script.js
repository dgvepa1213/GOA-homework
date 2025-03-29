function countElements(array) {
    return array.length;
}

// Example usage
let myArray = [1, 2, 3, 4, 5];
let elementCount = countElements(myArray);
console.log(elementCount); // Output: 5
/////////////////

function concatenateArrays(array1, array2) {
    return array1.concat(array2);
}

// Example usage
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let resultArray = concatenateArrays(array1, array2);
console.log(resultArray); // Output: [1, 2, 3, 4, 5, 6]
/////////////////////

function addToArray(array, value) {
    return array.push(value);
}

// Example usage
let my   = [1, 2, 3];
let newLength = addToArray(myArray, 4);
console.log(myArray);     // Output: [1, 2, 3, 4]
console.log(newLength);   // Output: 4
//////////////////////////////////////////

function removeLastElement(array) {
    return array.pop();
}

// Example usage
let  = [1, 2, 3, 4];
let removedElement = removeLastElement(myArray);
console.log(myArray);         // Output: [1, 2, 3]
console.log(removedElement);  // Output: 4
/////////

function concatenateAndPush(array1, array2, newValue) {
    const concatenatedArray = array1.concat(array2);
    concatenatedArray.push(newValue);
    return concatenatedArray;
}

// Example usage
let  = [1, 2, 3];
let  = [4, 5, 6];
let newValue = 7;

let = concatenateAndPush(array1, array2, newValue);
console.log(resultArray); // Output: [1, 2, 3, 4, 5, 6, 7]

//////////////////////


function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Example usage
let  = [1, 2, 3, 4, 5];
let totalSum = sumArray(myArray);
console.log(totalSum); // Output: 15
//////////////////


function getEvenIndexedElements(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i += 2) {
        newArray.push(array[i]);
    }
    return newArray;
}

// Example usage
let originalArray = [10, 20, 30, 40, 50, 60];
let evenIndexedArray = getEvenIndexedElements(originalArray);
console.log(evenIndexedArray); // Output: [10, 30, 50]
//////////////////
function getStringLengths(array) {
    let lengthsArray = [];
    for (let i = 0; i < array.length; i++) {
        lengthsArray.push(array[i].length);
    }
    return lengthsArray;
}

// Example usage
let stringsArray = ["apple", "banana", "cherry"];
let lengthsArray = getStringLengths(stringsArray);
console.log(lengthsArray); // Output: [5, 6, 6]
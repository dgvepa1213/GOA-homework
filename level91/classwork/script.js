// 5 მნიშვნელობის მქონე მასივი
let myArray = [10, 20, 30, 40, 50];

// ფუნქცია: მნიშვნელობის შემოწმება მასივში
function checkValues(array, values) {
    let results = values.map(value => {
        let index = array.indexOf(value);
        return {
            value: value,
            exists: index !== -1,
            index: index !== -1 ? index : null
        };
    });
    return results;
}

// შემოწმება მნიშვნელობებისთვის
let valuesToCheck = [20, 30, 60];
let checkResults = checkValues(myArray, valuesToCheck);
console.log(checkResults);
// Output: [{value: 20, exists: true, index: 1}, {value: 30, exists: true, index: 2}, {value: 60, exists: false, index: null}]

// 3 მნიშვნელობის დამატება მასივში
myArray.push(60, 70, 80);
console.log(myArray); // Output: [10, 20, 30, 40, 50, 60, 70, 80]

// 4 მნიშვნელობის ამოშლა მასივიდან
myArray.splice(0, 4);
console.log(myArray); // Output: [50, 60, 70, 80]
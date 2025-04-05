// Step 1: Create three arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8];

// Step 2: Concatenate arr1 and arr2 into mergedArray
let mergedArray = arr1.concat(arr2);
console.log("After concatenation:", mergedArray);

// Step 3: Use copyWithin to copy the first three elements of mergedArray to positions starting from index 5
mergedArray.copyWithin(5, 0, 3);
console.log("After copyWithin:", mergedArray);

// Step 4: Use fill to replace elements from index 6 to the end with 0
mergedArray.fill(0, 6);
console.log("After fill:", mergedArray);

// Step 5: Remove the last element using pop
mergedArray.pop();
console.log("After pop:", mergedArray);


mergedArray.shift();
console.log("After shift:", mergedArray);


mergedArray.unshift(100, 200);
console.log("After unshift:", mergedArray);


mergedArray.splice(2, 2, ...arr3);
console.log("After splice:", mergedArray);


let slicedArray = mergedArray.slice(-5);
console.log("slicedArray:", slicedArray);


let joinedString = slicedArray.join(",");
console.log("Joined string:", joinedString);

///////////////////////

// Step 1: Create initial arrays
let students = ["Alice", "Bob", "Charlie"];
let grades = [85, 90, 78];

// Step 2: Function to add a student and grade using unshift
function addStudent(studentName, grade) {
    students.unshift(studentName);
    grades.unshift(grade);
    return { students, grades };
}

// Step 3: Function to remove the last student and grade using pop
function removeLastStudent() {
    students.pop();
    grades.pop();
    return { students, grades };
}

// Step 4: Function to replace the grade of a student by index using splice
function replaceGrade(index, newGrade) {
    if (index >= 0 && index < grades.length) {
        grades.splice(index, 1, newGrade);
    } else {
        console.log("Invalid index");
    }
    return grades;
}

// Step 5: Function to update all grades to a specific value using fill
function updateGrades(newGrade) {
    grades.fill(newGrade);
    return grades;
}

// Example usage:
console.log("Before operations:");
console.log("Students:", students);
console.log("Grades:", grades);

console.log("\nAdding a student...");
addStudent("Dave", 88);
console.log("Students:", students);
console.log("Grades:", grades);

console.log("\nRemoving the last student...");
removeLastStudent();
console.log("Students:", students);
console.log("Grades:", grades);

console.log("\nReplacing grade at index 1...");
replaceGrade(1, 95);
console.log("Grades:", grades);

console.log("\nUpdating all grades...");
updateGrades(100);
console.log("Grades:", grades);

//////////////////

// Step 1: Create the initial playlist array
let playlist = ["Song A", "Song B", "Song C", "Song D"];

// Step 2: Function to add a song to the beginning of the playlist
function addSong(songTitle) {
    playlist.unshift(songTitle);
    return playlist;
}

// Step 3: Function to remove the last song from the playlist
function removeLastSong() {
    playlist.pop();
    return playlist;
}

// Step 4: Function to move the first two songs to the end of the playlist
function moveSongs() {
    playlist.copyWithin(playlist.length - 2, 0, 2); // Adjust indices to copy the first two songs to the end
    return playlist;
}

// Step 5: Function to combine the playlist with a second playlist
function combinePlaylists(secondPlaylist) {
    return playlist.concat(secondPlaylist); // Combine the two playlists
}

// Example usage:
console.log("Initial playlist:", playlist);

console.log("\nAdding a song...");
addSong("New Song");
console.log("Updated playlist:", playlist);

console.log("\nRemoving the last song...");
removeLastSong();
console.log("Updated playlist:", playlist);

console.log("\nMoving the first two songs to the end...");
moveSongs();
console.log("Updated playlist:", playlist);

console.log("\nCombining playlists...");
let secondPlaylist = ["Song E", "Song F"];
let combinedPlaylist = combinePlaylists(secondPlaylist);
console.log("Combined playlist:", combinedPlaylist);

///////////////////////


// Step 1: Create initial arrays
let cartItems = ["Apple", "Banana", "Cherry"];
let prices = [1.2, 0.8, 2.5];

// Step 2: Function to add an item and its price using unshift
function addItem(item, price) {
    cartItems.unshift(item);
    prices.unshift(price);
    return { cartItems, prices };
}

// Step 3: Function to remove the first item and its price using shift
function removeFirstItem() {
    cartItems.shift();
    prices.shift();
    return { cartItems, prices };
}

// Step 4: Function to replace an item and its price by index using splice
function replaceItem(index, newItem, newPrice) {
    if (index >= 0 && index < cartItems.length) {
        cartItems.splice(index, 1, newItem);
        prices.splice(index, 1, newPrice);
    } else {
        console.log("Invalid index");
    }
    return { cartItems, prices };
}

// Step 5: Function to create a receipt using join
function createReceipt() {
    return cartItems.join(", ");
}

// Step 6: Function to apply a discount to all prices using fill
function applyDiscount(discountPrice) {
    prices.fill(discountPrice);
    return prices;
}

// Example usage:
console.log("Initial cart:");
console.log("Items:", cartItems);
console.log("Prices:", prices);

console.log("\nAdding an item...");
addItem("Orange", 1.5);
console.log("Updated cart:");
console.log("Items:", cartItems);
console.log("Prices:", prices);

console.log("\nRemoving the first item...");
removeFirstItem();
console.log("Updated cart:");
console.log("Items:", cartItems);
console.log("Prices:", prices);

console.log("\nReplacing an item...");
replaceItem(1, "Grapes", 3.0);
console.log("Updated cart:");
console.log("Items:", cartItems);
console.log("Prices:", prices);

console.log("\nCreating receipt...");
let receipt = createReceipt();
console.log("Receipt:", receipt);

console.log("\nApplying a discount...");
applyDiscount(2.0);
console.log("Discounted prices:", prices);
///////////////////////////////

// Step 1: Create the initial library array with book objects
let library = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", copies: 5 },
    { title: "1984", author: "George Orwell", copies: 8 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", copies: 3 }
];

// Step 2: Function to add a book using push
function addBook(book) {
    library.push(book);
    return library;
}

// Step 3: Function to remove the last book using pop
function removeLastBook() {
    library.pop();
    return library;
}

// Step 4: Function to update copies of a book using splice
function updateBookCopies(title, newCopies) {
    const index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1, { ...library[index], copies: newCopies });
    } else {
        console.log("Book not found");
    }
    return library;
}

// Step 5: Function to list all book titles using join
function listBooks() {
    const titles = library.map(book => book.title);
    return titles.join(", ");
}

// Step 6: Function to extract a portion of the library using slice
function extractBooks(start, end) {
    return library.slice(start, end);
}

// Step 7: Function to copy the first book to the last position using copyWithin
function modifyBooks() {
    if (library.length > 1) {
        library.copyWithin(library.length - 1, 0, 1);
    }
    return library;
}

// Step 8: Function to reset copies of all books using fill
function resetCopies(newCopies) {
    library = library.map(book => ({ ...book, copies: newCopies }));
    return library;
}

// Step 9: Function to remove the first book using shift
function removeFirstBook() {
    library.shift();
    return library;
}

// Step 10: Function to add a book to the beginning using unshift
function addFirstBook(book) {
    library.unshift(book);
    return library;
}

// Example usage:
console.log("Initial library:", library);

console.log("\nAdding a new book...");
addBook({ title: "Moby Dick", author: "Herman Melville", copies: 4 });
console.log("Updated library:", library);

console.log("\nRemoving the last book...");
removeLastBook();
console.log("Updated library:", library);

console.log("\nUpdating copies of '1984'...");
updateBookCopies("1984", 10);
console.log("Updated library:", library);

console.log("\nListing all book titles...");
console.log("Book titles:", listBooks());

console.log("\nExtracting the first two books...");
console.log("Extracted books:", extractBooks(0, 2));

console.log("\nCopying the first book to the last position...");
modifyBooks();
console.log("Updated library:", library);

console.log("\nResetting copies to 2 for all books...");
resetCopies(2);
console.log("Updated library:", library);

console.log("\nRemoving the first book...");
removeFirstBook();
console.log("Updated library:", library);

console.log("\nAdding a book to the beginning...");
addFirstBook({ title: "Pride and Prejudice", author: "Jane Austen", copies: 7 });
console.log("Updated library:", library);

/////////////////////////


// Step 1: Create three arrays
let arr = [1, 2, 3];
let ar = [4, 5, 6];
let nestedArray = [[7, 8], [9, 10]];

// Step 2: Concatenate arr1 and arr2 into combinedArray
let combinedArray = arr1.concat(arr2);
console.log("Combined Array:", combinedArray);

// Step 3: Use copyWithin to copy the first three elements of combinedArray to positions starting from index 5
combinedArray.copyWithin(5, 0, 3);
console.log("After copyWithin:", combinedArray);

// Step 4: Use fill to replace elements from index 6 to the end with the number 0
combinedArray.fill(0, 6);
console.log("After fill:", combinedArray);

// Step 5: Remove the last element using pop
combinedArray.pop();
console.log("After pop:", combinedArray);

// Step 6: Remove the first element using shift
combinedArray.shift();
console.log("After shift:", combinedArray);

// Step 7: Add 100 and 200 to the beginning using unshift
combinedArray.unshift(100, 200);
console.log("After unshift:", combinedArray);

// Step 8: Use splice to remove elements at indices 2 and 3 and replace them with [x, y, z]
combinedArray.splice(2, 2, "x", "y", "z");
console.log("After splice:", combinedArray);

// Step 9: Use slice to create slicedArray containing the last five elements
let sliceArray = combinedArray.slice(-5);
console.log("Sliced Array:", slicedArray);

// Step 10: Use join to create a string from slicedArray with elements separated by a comma
let joineString = slicedArray.join(",");
console.log("Joined String:", joinedString);

// Step 11: Use flat to flatten nestedArray into a single-level array
let flatArray = nestedArray.flat();
console.log("Flat Array:", flatArray);

// Step 12: Check if the element 8 is included in flatArray using includes
let includes8 = flatArray.includes(8);
console.log("Includes 8:", includes8);

// Step 13: Find the index of the element 9 in flatArray using indexOf
let indexOf9 = flatArray.indexOf(9);
console.log("Index of 9:", indexOf9);

// Step 14: Find the last index of 10 in flatArray using lastIndexOf
let lastIndexOf10 = flatArray.lastIndexOf(10);
console.log("Last Index of 10:", lastIndexOf10);

//////////////

// Step 1: Declare an initial array
let numbers = [10, 20, 30, 40, 50];

// Step 2: Use .concat() to create a new combined array
let secondArray = [60, 70, 80];
let combineArray = numbers.concat(secondArray);
console.log("Combined Array:", combinedArray);

// Step 3: Use .copyWithin() to copy elements within numbers
numbers.copyWithin(numbers.length - 2, 1, 3);
console.log("After copyWithin:", numbers);

// Step 4: Use .fill() to replace the first three elements with 100
numbers.fill(100, 0, 3);
console.log("After fill:", numbers);

// Step 5: Use .pop() to remove the last element and store it
let poppedElement = numbers.pop();
console.log("Popped Element:", poppedElement);
console.log("After pop:", numbers);

// Step 6: Use .shift() to remove the first element and store it
let shiftedElement = numbers.shift();
console.log("Shifted Element:", shiftedElement);
console.log("After shift:", numbers);

// Step 7: Use .unshift() to add 5 and 15 to the beginning
numbers.unshift(5, 15);
console.log("After unshift:", numbers);

// Step 8: Use .join() to convert numbers into a string separated by '-'
let joinestring = numbers.join("-");
console.log("Joined String:", joinedString);

// Step 9: Use .slice() to extract elements from index 1 to 3
let slicearray = numbers.slice(1, 4);
console.log("Sliced Array:", slicedArray);

// Step 10: Use .splice() to remove elements at indices 2 and 3 and replace with [200, 300]
numbers.splice(2, 2, 200, 300);
console.log("After splice:", numbers);

// Step 11: Use .flat() to flatten nestedArr
let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flatarray = nestedArr.flat(2); // Flatten to single level
console.log("Flat Array:", flatArray);

// Step 12: Use .includes() to check if numbers contains 50
let contains50 = numbers.includes(50);
console.log("Contains 50:", contains50);

// Step 13: Use .indexOf() to find the index of 30 in numbers
let indexOf30 = numbers.indexOf(30);
console.log("Index of 30:", indexOf30);

// Step 14: Use .lastIndexOf() to find the last occurrence index of 20
let lastIndexOf20 = numbers.lastIndexOf(20);
console.log("Last Index of 20:", lastIndexOf20);

// Step 15: Use .push() to add 90 and 100 to the end of numbers
numbers.push(90, 100);
console.log("After push:", numbers);

//////////////////////////////////



// Step 1: Concatenate Arrays
let people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];
let morePeople = [
    { id: 4, name: 'Diana' },
    { id: 5, name: 'Eve' },
];

let allPeople = people.concat(morePeople);
console.log("All People:", allPeople);

// Step 2: Copy Elements Within an Array
allPeople.copyWithin(allPeople.length - 2, 0, 2);
console.log("After copyWithin:", allPeople);

// Step 3: Fill Part of an Array with a New Value
allPeople.fill({ id: 0, name: 'Unknown' }, 0, 2);
console.log("After fill:", allPeople);

// Step 4: Remove the Last Element
let removedPerson = allPeople.pop();
console.log("Removed Person:", removedPerson);
console.log("After pop:", allPeople);

// Step 5: Remove the First Element
let firstRemovedPerson = allPeople.shift();
console.log("First Removed Person:", firstRemovedPerson);
console.log("After shift:", allPeople);

// Step 6: Add Elements to the Beginning
allPeople.unshift({ id: 6, name: 'Frank' }, { id: 7, name: 'Grace' });
console.log("After unshift:", allPeople);

// Step 7: Join Array into a String
let peopleString = allPeople.map(person => person.name).join(",");
console.log("People String:", peopleString);

// Step 8: Extract a Subarray
let somePeople = allPeople.slice(1, 4);
console.log("Some People:", somePeople);

// Step 9: Modify the Array by Removing and Adding Elements
allPeople.splice(2, 2, { id: 10, name: 'Ivan' }, { id: 11, name: 'Judy' });
console.log("After splice:", allPeople);

// Step 10: Flatten a Nested Array
let nesteArray = [[1, 2], [3, 4], [[5, 6], [7, 8]]];
let flatrray = nestedArray.flat(2);
console.log("Flat Array:", flatArray);

// Step 11: Check if an Element Exists
let containsEve = allPeople.some(person => person.id === 5 && person.name === 'Eve');
console.log("Contains Eve:", containsEve);

// Step 12: Find the Index of an Element
let indexOfCharlie = allPeople.findIndex(person => person.id === 3);
console.log("Index of Charlie:", indexOfCharlie);

// Step 13: Find the Last Occurrence of an Element
let lastIndexOfBob = allPeople.map(person => person.id).lastIndexOf(2);
console.log("Last Index of Bob:", lastIndexOfBob);

// Step 14: Add a New Element to the End
flatArray.push({ id: 8, name: 'Hank' });
console.log("Flat Array after push:", flatArray);
///////////////////




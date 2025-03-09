// წიგნის ობიექტის შექმნა
var book = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
    price: 19.99
};

// ობიექტის გამოტანა
console.log(book);

// Dot Notation-ით თვისებების გამოტანა
console.log("სათაური:", book.title);
console.log("ავტორი:", book.author);
console.log("გამოშვების წელი:", book.year);
console.log("ჟანრი:", book.genre);
console.log("ფასი:", book.price);

// Bracket Notation-ით თვისებების გამოტანა
console.log("სათაური:", book["title"]);
console.log("ავტორი:", book["author"]);
console.log("გამოშვების წელი:", book["year"]);
console.log("ჟანრი:", book["genre"]);
console.log("ფასი:", book["price"]);

// ყველა თვისების გამოყენებით წინადადების შექმნა
console.log(`წიგნი "${book.title}", რომლის ავტორია ${book.author}, გამოიცა ${book.year} წელს. ის ეკუთვნის ${book.genre} ჟანრს და ღირს ${book.price} ლარი.`);
//////////////////////////////////////////////////////////


// სტუდენტის ობიექტის შექმნა
var student = {
    name: "ნიკა გოგიშვილი",
    age: 20,
    faculty: "ინფორმაციული ტექნოლოგიები",
    course: 2,
    gpa: 3.8
};

// ობიექტის გამოტანა
console.log(student);

// Dot Notation-ით თვისებების გამოტანა
console.log("სახელი:", student.name);
console.log("ასაკი:", student.age);
console.log("ფაკულტეტი:", student.faculty);
console.log("კურსი:", student.course);
console.log("საშუალო ქულა:", student.gpa);

// Bracket Notation-ით თვისებების გამოტანა
console.log("სახელი:", student["name"]);
console.log("ასაკი:", student["age"]);
console.log("ფაკულტეტი:", student["faculty"]);
console.log("კურსი:", student["course"]);
console.log("საშუალო ქულა:", student["gpa"]);

// ყველა თვისების გამოყენებით წინადადების შექმნა
console.log(`სტუდენტი ${student.name}, რომელიც არის ${student.age} წლის, სწავლობს ${student.faculty} ფაკულტეტზე. ის ამჟამად არის ${student.course}-კურსზე და მისი საშუალო ქულაა ${student.gpa}.`);

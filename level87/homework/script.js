function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;

    this.introduce = function() {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`);
    };
}

// Example usage:
const person1 = new Person("Alice", 30, "Software Engineer");
person1.introduce(); // Output: Hi, I'm Alice, a 30-year-old Software Engineer.
/////////////////////////


function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    };
}

// Creating three book objects
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

// Calling getSummary method for each book
console.log(book1.getSummary()); // Output: To Kill a Mockingbird by Harper Lee, published in 1960.
console.log(book2.getSummary()); // Output: 1984 by George Orwell, published in 1949.
console.log(book3.getSummary()); // Output: The Great Gatsby by F. Scott Fitzgerald, published in 1925.
///////////////////////////////////


function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    this.changePassword = function(newPassword) {
        this.password = newPassword;
        console.log("Password changed successfully.");
    };

    this.getDetails = function() {
        return `Username: ${this.username}, Email: ${this.email}`;
    };
}

// Creating a user object
const user1 = new User("johnDoe", "johndoe@example.com", "secure123");

// Getting user details
console.log(user1.getDetails()); // Output: Username: johnDoe, Email: johndoe@example.com

// Changing the password
user1.changePassword("newSecure456");

// Verifying password change (for demonstration, not usually recommended)
console.log(user1.password); // Output: newSecure456

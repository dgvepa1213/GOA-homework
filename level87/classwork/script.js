// მომხმარებლის კონსტრუქტორი
function User(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;

    // მეთოდი, რომელიც აბრუნებს მომხმარებლის დეტალებს წინადადების სახით
    this.getUserInfo = function () {
        return `ჩემი სახელია ${this.name}, ჩემი გვარია ${this.lastName}, ჩემი ტელეფონის ნომერია ${this.phoneNumber}, ჩემი ელ.ფოსტა არის ${this.email}.`;
    };
}

// სამი მომხმარებლის ობიექტის შექმნა
var user1 = new User("გიორგი", "მათურელი", "555-123-456", "giorgi@email.com", "pass123", "pass123");
var user2 = new User("თამუნა", "ქველიძე", "599-987-654", "tamuna@email.com", "secure456", "secure456");
var user3 = new User("ნიკა", "გოგიშვილი", "595-789-321", "nika@email.com", "mypassword", "mypassword");

// მომხმარებლის ინფორმაციების გამოტანა
console.log(user1.getUserInfo());
console.log(user2.getUserInfo());
console.log(user3.getUserInfo());

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Leap year
            } else {
                return false; // Not a leap year
            }
        } else {
            return true; // Leap year
        }
    } else {
        return false; // Not a leap year
    }
}

// Example usage:
const year = prompt("Enter a year to check if it's a leap year:");
if (isLeapYear(parseInt(year))) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

////////////

function selectPersonToPay(names) {
    // შემთხვევითი რიცხვის გენერირება სიიდან
    const randomIndex = Math.floor(Math.random() * names.length);
    const chosenPerson = names[randomIndex];
    return chosenPerson;
}

// მაგალითი
const namesList = ["ანა", "გიორგი", "მარიამი", "დავით", "ნინო"];
const personToPay = selectPersonToPay(namesList);
console.log(`${personToPay} უნდა გადაიხადოს ყველას საკვების გადასახადი!`);

////////

function generateRandomNumbersAndAverage(n) {
    let numbers = []; // მასივი შემთხვევითი რიცხვებისთვის
    let sum = 0; // რიცხვების ჯამი

    // გენერირება N შემთხვევითი რიცხვების და მათ მასივში შენახვა
    for (let i = 0; i < n; i++) {
        let randomNum = Math.random() * 100; // შემთხვევითი რიცხვი 0-დან 100-მდე
        numbers.push(randomNum); 
        sum += randomNum; // რიცხვების დამატება ჯამში
    }

    // საშუალო არითმეტიკული
    let average = sum / n;

    return {
        numbers: numbers,
        average: average
    };
}

// მაგალითი
let result = generateRandomNumbersAndAverage(5); // გენერირება 5 რიცხვის
console.log("შემთხვევითი რიცხვები:", result.numbers);
console.log("საშუალო არითმეტიკული:", result.average);
//////////

function showCurrentDateTime() {
    const now = new Date();
    const formattedDateTime = now.getFullYear() + "-" +
        String(now.getMonth() + 1).padStart(2, '0') + "-" +
        String(now.getDate()).padStart(2, '0') + " " +
        String(now.getHours()).padStart(2, '0') + ":" +
        String(now.getMinutes()).padStart(2, '0') + ":" +
        String(now.getSeconds()).padStart(2, '0');
    document.getElementById("currentDateTime").innerText = formattedDateTime;
}

////////////

function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const ageResult = `Age: ${years} years, ${months} months, ${days} days`;
    document.getElementById("userAge").innerText = ageResult;
}

////////////////////


function getDayOfWeek(dateInput) {
    const date = new Date(dateInput);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[date.getDay()];
    document.getElementById("dayOfWeek").innerText = `Day of the week: ${day}`;
}

////////////////



function startTimer() {
    let counter = 0;
    setInterval(() => {
        console.log(`Timer: ${counter} seconds`);
        counter++;
    }, 1000); // Updates every second
}
startTimer();

///////////////


function displayCurrentTime() {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
    }, 1000); // Updates every second
}
displayCurrentTime();

//////

function logRandomNumber() {
    setInterval(() => {
        const randomNum = Math.random(); // Generates a random number between 0 and 1
        console.log(`Random Number: ${randomNum}`);
    }, 1000); // Updates every second
}
logRandomNumber();


//////////
function logRandomNumber() {
    setInterval(() => {
        const randomNum = Math.random(); // Generates a random number between 0 and 1
        console.log(`Random Number: ${randomNum}`);
    }, 1000); // Updates every second
}
logRandomNumber();

///////
// ცვლადის შექმნა let-ით
let a = 5;  // ცვლადი 'a' არის რიცხვი 5

// ცვლადის მნიშვნელობის შეცვლა
a = 10;  // ახლა 'a' მნიშვნელობა გახდა 10

// let-ით გამოცხადებული ცვლადები არსებობენ მხოლოდ ბლოკის დონეზე
if (true) {
    let b = 20;  // 'b' არსებობს მხოლოდ ამ if ბლოკში
    console.log(b);  // 20
}

// console.log(b);  // ამ ხაზზე იქნება შეცდომა, რადგან 'b' არსებობს მხოლოდ if ბლოკში
console.log(a);  // 10

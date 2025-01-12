function calculator(a, b) {
    // ჯამი
    const sum = a + b;
    // სხვაობა
    const difference = a - b;
    // ნამრავლი
    const product = a * b;
    // განაყოფი
    let quotient;
    if (b !== 0) {
        quotient = a / b;
    } else {
        quotient = "გაურკვეველი (ნული)";
    }

    // შედეგების გამოჩენა
    console.log("ჯამი:", sum);
    console.log("სხვაობა:", difference);
    console.log("ნამრავლი:", product);
    console.log("განაყოფი:", quotient);
}

// მომხმარებლის შეყვანა
const a = parseFloat(prompt("10"));
const b = parseFloat(prompt("5"));

// კალკულატორის გაშვება
calculator(a, b);


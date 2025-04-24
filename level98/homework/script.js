/////////////////

function fakeBin(x) {
    return x.replace(/\d/g, digit => digit < 5 ? '0' : '1');
  }

  ////////////////////////


  function calculator(a, b, sign) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "unknown value";
    }

    switch (sign) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Division by zero error";
        default: return "unknown value";
    }
}

//////////////


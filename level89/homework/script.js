function sameCase(a, b) {
    if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
      return -1; // If either character is not a letter
    }
    
    if ((a === a.toLowerCase() && b === b.toLowerCase()) || 
        (a === a.toUpperCase() && b === b.toUpperCase())) {
      return 1; // Both are uppercase or both are lowercase
    }
  
    return 0; // One is uppercase and the other is lowercase
  }
  
  ////////////////////////////


  function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
      return []; // Return an empty array if input is null or empty
    }
  
    let countPositives = 0;
    let sumNegatives = 0;
  
    for (let num of input) {
      if (num > 0) {
        countPositives++;
      } else if (num < 0) {
        sumNegatives += num;
      }
    }
  
    return [countPositives, sumNegatives];
  }
//////////////////////


function findMultiples(integer, limit) {
    let multiples = [];
  
    for (let i = integer; i <= limit; i += integer) {
      multiples.push(i);
    }
  
    return multiples;
  }
  
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump;
  };
  
  // Example usage:
  console.log(zeroFuel(50, 25, 2));  // Output: true  (25 * 2 = 50, can reach)
  console.log(zeroFuel(100, 25, 3)); // Output: false (25 * 3 = 75, not enough)
  console.log(zeroFuel(30, 10, 3));  // Output: true  (10 * 3 = 30, can reach)
  
function cubeChecker(volume, side) {
    return side > 0 && volume === Math.pow(side, 3);
  }
  
  // Example usage:
  console.log(cubeChecker(27, 3));   // true  (3³ = 27)
  console.log(cubeChecker(8, 2));    // true  (2³ = 8)
  console.log(cubeChecker(0, 0));    // false (invalid cube)
  console.log(cubeChecker(27, -3));  // false (side length can't be negative)
  console.log(cubeChecker(16, 3));   // false (3³ ≠ 16)
  
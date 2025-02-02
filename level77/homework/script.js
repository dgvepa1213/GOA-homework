const quarterOf = (month) => {
    return Math.ceil(month / 3);
  };
  
  // Example usage:
  console.log(quarterOf(3));  // Output: 1 (January - March)
  console.log(quarterOf(7));  // Output: 3 (July - September)
  console.log(quarterOf(12)); // Output: 4 (October - December)
  
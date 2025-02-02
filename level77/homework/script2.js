const areaOrPerimeter = function(l, w) {
    return l === w ? l * w : 2 * (l + w);
  };
  
  // Example usage:
  console.log(areaOrPerimeter(4, 4));  // Output: 16 (Area: square)
  console.log(areaOrPerimeter(6, 10)); // Output: 32 (Perimeter: rectangle)
  
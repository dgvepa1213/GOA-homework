const areaOrPerimeter = function(l, w) {
    return l === w ? l * w : 2 * (l + w);
};
console.log(areaOrPerimeter(3, 3)); // Output: 9 (კვადრატი, ფართობი)
console.log(areaOrPerimeter(6, 10)); // Output: 32 (მართკუთხედი, პერიმეტრი)
console.log(areaOrPerimeter(4, 4)); // Output: 16 (კვადრატი)
console.log(areaOrPerimeter(7, 5)); // Output: 24 (მართკუთხედი)

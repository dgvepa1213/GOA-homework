function grow(x) {
    return x.reduce((acc, num) => acc * num, 1);
}

console.log(grow([1, 2, 3, 4])); // Output: 24


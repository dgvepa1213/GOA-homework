const numbers = [2, 4, 6, 8, 10];

numbers.forEach(num => {
    console.log(`რიცხვი: ${num}, კვადრატი: ${num ** 2}`);
});


///////////////////////

const prices = [10, 20, 30];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(`ჯამი: ${total}`);
///////////

const nums = [10, 5, 2, 7, 19, 203];

const difference = nums.reduceRight((acc, num) => acc - num);

console.log(`სხვაობა: ${difference}`);
//////////////////
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (hour) => {
  hour = parseInt(hour, 10);
  console.log(hour);
  rl.close();
});



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(rl.question.toString());
let a=rl.question('abce','answer');
console.log(a);
//rl.question('What do you think of Node.js? ', (answer) => {
//  console.log('Thank you for your valuable feedback:', answer);
//  rl.close();
//});

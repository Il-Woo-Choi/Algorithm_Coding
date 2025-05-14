const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let n = Number(input);
console.log(n % 2 === 0 ? `${n} is even` : `${n} is odd`);
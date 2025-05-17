const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let str1 = String(input[0]);
let str2 = String(input[1]);

console.log(str1+str2);
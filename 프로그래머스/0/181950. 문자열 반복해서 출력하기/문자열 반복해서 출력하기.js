const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let str = String(input[0]);
let n = Number(input[1]);
let answer = "";

for(let i = 0; i < n; i++){
    answer += str;
}

console.log(answer);
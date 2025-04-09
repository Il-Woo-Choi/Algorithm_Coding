const solution = (num_str) => {
    let sum = 0;
    for(let i = 0; i < num_str.split("").length; i++){
        sum += Number(num_str[i]);
    }
    return sum;
}
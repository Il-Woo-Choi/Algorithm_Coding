const solution = (arr) => {
    let sum = 0;
    sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum / arr.length;
}
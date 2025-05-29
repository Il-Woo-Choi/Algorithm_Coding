const solution = (N) => {
    const sum = [...N.toString()].reduce((acc, num) => acc + Number(num), 0);
    return sum;
}
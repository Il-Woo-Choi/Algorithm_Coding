function solution(array) {
    array.sort((a,b) => a - b);
    let a = (array.length - 1) / 2;
    return array[a];
}
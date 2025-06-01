const solution = (n) => {
    let p = 0;
    let q = [];
    let arr = [...n.toString()];
    while (arr.length > 0) {
        p = arr.pop();
        q.push(Number(p));
    }
    return q;
}
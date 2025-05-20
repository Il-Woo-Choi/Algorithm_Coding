const solution = (l, r) => {
    let result = [];
    let count = 0;
    for(let i = l; i <= r; i++){
        const str = i.toString();
        if([...str].every(c => c === '0' || c === '5')){
            result.push(i);
            count++;
        }
    }
    if(count === 0){
        result.push(-1);
    }
    
    return result;
}
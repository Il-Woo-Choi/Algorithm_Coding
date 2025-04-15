const solution = (n) => {
    let sum1 = 0;
    let sum2 = 0;
    if(n % 2 === 1){
        for(let i = 1; i <= n; i++){
            if(i % 2 === 1){
                sum1 += i;
            }
        } 
        return sum1;
    } else {
        for(let i = 1; i <= n; i++){
            if(i % 2 === 0){
                sum2 += i*i;
            }
        }
        return sum2;
    }
}
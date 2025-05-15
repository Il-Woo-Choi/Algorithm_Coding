function solution(num_list) {
    let a = num_list.reduce((acc, cur) => acc + cur, 0);
    let b = num_list.reduce((acc, cur) => acc * cur, 1);
    let c = a * a;
    
    if(b > c){
        return 0;
    } else {
        return 1;
    }
}
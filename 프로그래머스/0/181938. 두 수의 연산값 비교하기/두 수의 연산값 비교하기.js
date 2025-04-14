function solution(a, b) {
    answer = String(a)+String(b);
    if(answer >= 2*a*b){
        return Number(answer);
    } else {
        return 2*a*b;
    }
}
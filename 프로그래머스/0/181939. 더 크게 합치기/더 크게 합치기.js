function solution(a, b) {
    let A = String(a);
    let B = String(b);
    
    ans1 = A + B;
    ans2 = B + A;
    answer = ans1 >= ans2 ? ans1 : ans2;
    
    
    return Number(answer);
}
function solution(arr1, arr2) {
    if(arr1.length > arr2.length){
        return 1;
    } else if(arr1.length < arr2.length){
        return -1;
    } else {
        const sum1 = arr1.reduce((acc1, num1) => acc1 + num1, 0);
        const sum2 = arr2.reduce((acc2, num2) => acc2 + num2, 0);
        
        if(sum1 > sum2){
            return 1;
        } else if(sum1 < sum2) {
            return -1;
        } else{
            return 0;
        }
    }
}
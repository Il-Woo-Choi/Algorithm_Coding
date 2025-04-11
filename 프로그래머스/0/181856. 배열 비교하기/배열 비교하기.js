function solution(arr1, arr2) {
    let num1 = 0;
    let num2 = 0;
    
    if(arr1.length > arr2.length){
        return 1;
    } else if(arr1.length < arr2.length){
        return -1;
    } else {
        for(let i = 0; i < arr1.length; i++){
            num1 += arr1[i];
        }
        
        for(let i = 0; i < arr2.length; i++){
            num2 += arr2[i];
        }
        
        if(num1 > num2){
            return 1;
        } else if(num1 < num2) {
            return -1;
        } else{
            return 0;
        }
    }
}
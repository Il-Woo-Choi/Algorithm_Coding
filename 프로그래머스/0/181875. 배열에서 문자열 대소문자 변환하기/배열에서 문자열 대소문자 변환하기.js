const solution = (strArr) => {
    let newArr = strArr.map((element, index) => {
        return index % 2 === 1 ? element.toUpperCase() : element.toLowerCase();
    })
    
    return newArr;
}
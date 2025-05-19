const solution = (code) => {
    let mode = false;
    let ret = "";
    for(let i = 0; i < code.length; i++){
        if(mode === false){
            if(code[i] == 1){
                mode = !mode;
            } else {
                if(i % 2 === 0){
                    ret += code[i];
                }
            }
        } else {
            if(code[i] == 1){
                mode = !mode;
            } else {
                if(i % 2 === 1){
                    ret += code[i];
                }
            }
        }
        
    }
    if(ret === ""){
        return "EMPTY";
    }
    return ret;
}
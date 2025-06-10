const solution = (s) => {
    const f = s.toLowerCase();
    let p = 0;
    let y = 0;
    let x = 0;
    for(let i = 0; i < f.length; i++){
        if(f[i] === "p"){
            p++;
        } else if(f[i] === "y"){
            y++;
        } else {
            x++;
        }
    }
    
            if(p == y || x==f.length){
            return true;
        } else if(p != y){
            return false;
        }
    
}
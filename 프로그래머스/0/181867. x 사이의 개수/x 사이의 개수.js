const solution = (myString) => {
    return myString.split("x").map(part => part.length);
}
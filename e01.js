function howManyCamelCase(str){
    return str.replace(/[a-z]/g, '').length;
}

console.log(howManyCamelCase("bonjourATousLesAmis"));
function IsAPangrams(str){
var letters = str.toLowerCase().match(/[a-z]/g);
var alphabet = [...new Set(letters)];
return alphabet.length === 26;
}

console.log(IsAPangrams("abcdefghijklmnopqrstuvwxyz"));
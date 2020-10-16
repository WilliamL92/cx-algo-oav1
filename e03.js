function marsos(str){
    var word = 0;
    var err = 0;
    for(var i = 0; i < str.length; i++){
        if(word == 3){
            word = 0;
        }
        switch(word){
            case 0:
                if(str[i] != "S"){
                    err = err + 1;
                }
            break;
            case 1:
                if(str[i] != "O"){
                    err = err + 1;
                }
            break;
            case 2:
                if(str[i] != "S"){
                    err = err + 1;
                }
            break;
        }
        word = word + 1;
    }
    return err;
}

console.log(marsos("SOSDOSSOS"));
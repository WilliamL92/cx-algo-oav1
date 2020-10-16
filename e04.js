function count(arr, arg) {
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == arg){
            count = count + 1;
        }
    }
    return count;
  }

function average(arr){
    var n = 0;
    for(var i = 0; i < arr.length; i++){
        n = n + arr[i];
    }
    return n/arr.length;
}

function min(arr){
    return Math.min( ...arr );
}

function max(arr){
    return Math.max( ...arr );
}

function shift(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(i == arr.length - 1){
            newArr.unshift(arr[0]);
        }
        else{
            newArr.push(arr[i+1]);
        }
    }
    return newArr;
}

function deviation(arr){
    return Math.max( ...arr ) - Math.min( ...arr );
}

// console.log(count([2,2,2,8,2,4,5,5,5,9], 2));
// console.log(average([2, 2, 2, 2, 2, 4, 5, 5, 5, 9]));
// console.log(min([2, 1, 2, 2, 2, 4, 5, 5, 5, 9]));
// console.log(max([2, 1, 2, 2, 2, 4, 5, 5, 5, 9]));
// console.log(shift([5, 1, 9]));
// console.log(deviation([5, 1, 9]));
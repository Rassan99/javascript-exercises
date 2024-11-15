const fibonacci = function(a) {
    // rec fn = fn-1 + fn-2 ;
    //a is the placement aka num of index
    if (a <0){
        return 'OOPS';
    }
    let fib = [0,1];
    for (let i = 2 ; i <= a ; i ++){
        // 4th  1 , 0 +1 , 1 + 1 , 
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[a];
};

// Do not edit below this line
module.exports = fibonacci;

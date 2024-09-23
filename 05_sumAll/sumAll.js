const sumAll = function(num1,num2) {
    let biggerNum;
    let smallNum;
    let counter=0;
    if(num1>num2){
        biggerNum=num1;
        smallNum=num2;
    }
    else if (num1<num2){
        biggerNum=  num2;
        smallNum=num1;
    }
 
    if (!(Number.isInteger(num1) && Number.isInteger(num2))){
     return 'ERROR';
     }

    if (num1<0 || num2<0){
             return 'ERROR';

    }
    for(let i = biggerNum; i>= smallNum;i--){
        counter+=i;
    }
    return counter
};
// Do not edit below this line
module.exports = sumAll;

const reverseString = function(word) {
    const arrayWord = Array.from(word);
    console.log(arrayWord);
    let string =[];
    let i = arrayWord.length;
    for(i; i>0 ; i--){
        console.log(i);
        string.push(arrayWord[i-1]);
    }
    string = string.join('')
    return string;
};
console.log( reverseString('hi my name !')  ) ;
// Do not edit below this line
module.exports = reverseString;

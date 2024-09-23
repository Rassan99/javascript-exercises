const reverseString = function(word) {
    const arrayWord = Array.from(word);
    
    let string =[];
    let i = arrayWord.length;
    for(i; i>0 ; i--){
        
        string.push(arrayWord[i-1]);
    }
    string = string.join('')
    return string;
};
// Do not edit below this line
module.exports = reverseString;

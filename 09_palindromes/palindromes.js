const palindromes = function (a) {
    let word = a.replaceAll(" ", "").toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
    let rev = '';
    for(let i = word.length -1  ; i >=  0 ; i--){
        rev += word[i];
    }
    return word == rev;
};

// Do not edit below this line
module.exports = palindromes;

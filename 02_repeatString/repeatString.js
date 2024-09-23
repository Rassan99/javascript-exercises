const repeatString = function(text,times) {
    
   if (times<0){
    return text = 'ERROR';
   }
   let string ='';
   for (let i=0 ; i<times ; i++){
      string += text;
   }
   return string;
};
// Do not edit below this line
module.exports = repeatString;
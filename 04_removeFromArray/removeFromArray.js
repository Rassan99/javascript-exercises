const removeFromArray = function(array,...args) {

    for (let i = 0 ; i<array.length ; i++){
        for(let j=0; j<args.length;j++){
            if (array[i]== args[j] && typeof(array[i])== typeof(args[j])){
                array.splice(i,1);
                i--;
                break;
            }
        }
    }

   return array;
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;

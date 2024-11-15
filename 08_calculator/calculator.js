const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a -  b ;
};

const sum = function(a) {
	return a.reduce((acc,a)=>acc+=a,0)
};

const multiply = function(a) {
	return a.reduce((mult,a)=>mult*=a,1)
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let factorial=1;
  while(a!=0){
    factorial*=a;
    a--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

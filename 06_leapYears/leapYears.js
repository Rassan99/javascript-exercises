const leapYears = function(year) {
    const yearDivisibleByFour=year%4==0;
    const yearDivisiblByHundred=year%100==0;
    const yearDivisibleByFourHundred=year%400==0;
    if (yearDivisibleByFour&&(!(yearDivisiblByHundred) || yearDivisibleByFourHundred)){
        return true;
    }
    else{
        return false;
    }
};
// Do not edit below this line
module.exports = leapYears;

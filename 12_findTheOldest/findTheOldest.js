const findTheOldest = function(a) {
    death = new Date().getFullYear();
    let sortedByage = a.sort((a,b)=> {
        const ageB= (b.yearOfDeath ? b.yearOfDeath : death )- b.yearOfBirth;
        const ageA= (a.yearOfDeath ? a.yearOfDeath : death )- a.yearOfBirth; 
        return ageB-ageA;
    });
    return sortedByage[0];
};

// Do not edit below this line
module.exports = findTheOldest;

const getAge = (birth, death) => {
    if (!death){
        death = (new Date()).getFullYear();
    }

    return death - birth;
}

const findTheOldest = function(people) {

    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })

    
    // INITIAL SOLUTION

    // const sortByOldest = people.sort((a, b) => {
    //     aDeathYear = a.yearOfDeath ? a.yearOfDeath : (new Date()).getFullYear(); 
    //     bDeathYear = b.yearOfDeath ? b.yearOfDeath : (new Date()).getFullYear(); 
    //     const aLifespan = aDeathYear - a.yearOfBirth;
    //     const bLifespan = bDeathYear - b.yearOfBirth;
    //     return aLifespan > bLifespan ? -1 : 1;
    // });

    // return sortByOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

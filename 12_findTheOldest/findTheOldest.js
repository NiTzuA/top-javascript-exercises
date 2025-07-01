const findTheOldest = function(people) {
    oldestPerson = people.reduce((oldest, current) => {
        const currentYear = new Date().getFullYear();
        const currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        return currentAge > oldestAge ? current : oldest;
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

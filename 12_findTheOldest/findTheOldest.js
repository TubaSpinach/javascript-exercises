const findTheOldest = function(people) {
    ages = people.map((x)=>x.yearOfDeath ? x.yearOfDeath - x.yearOfBirth : 2023 - x.yearOfBirth )
    oldestAge = Math.max(...ages)
    oldestIndex = ages.findIndex((x)=> x == oldestAge)
    console.log(ages,oldestAge,oldestIndex)
    return people[oldestIndex]
};

// Do not edit below this line
module.exports = findTheOldest;

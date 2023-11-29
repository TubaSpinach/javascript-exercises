const findTheOldest = function(people) {
    ages = people.map((x)=>x.yearOfDeath - x.yearOfBirth)
    oldestAge = Math.max(...ages)
    oldestIndex = ages.findIndex((x)=> x == oldestAge)
    console.log(ages,oldestAge,oldestIndex)
    return people[oldestIndex]
};

// Do not edit below this line
module.exports = findTheOldest;

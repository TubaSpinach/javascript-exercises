const sumAll = function(aStart, anEnd) {
    let start = (aStart <= anEnd) ? aStart : anEnd;
    let end = (anEnd === start) ? aStart : anEnd;
    let answer = 0;
    if (aStart < 0 || anEnd < 0) {
        return 'ERROR';
    }
    if (typeof aStart !== "number" || typeof anEnd !== "number") {
        return 'ERROR';
    }
    for(let i = start; i<=end; i++) {
        answer += i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;

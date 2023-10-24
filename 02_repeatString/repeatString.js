const repeatString = function(inpStr, repNum) {
    let answer = inpStr;
    if (repNum == 0){
        return '';
    } else if (repNum < 0) {
        return 'ERROR'
    }
    for(let i = 1; i < repNum; i++) {
        answer += inpStr;
    }
    return answer
};

// Do not edit below this line
module.exports = repeatString;

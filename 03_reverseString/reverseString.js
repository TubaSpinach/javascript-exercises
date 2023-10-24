const reverseString = function(inpStr) {
    let answer = '';
    for (let i = inpStr.length;i>=0;i--){
        answer += inpStr.charAt(i);
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;

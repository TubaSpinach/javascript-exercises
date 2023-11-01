const palindromes = function (word) {
    let letters = [];
    let noPunctationAllowed = /[!,. ]/g;
    
    let cleanWord = word.toLowerCase().replaceAll(noPunctationAllowed,"");
    for (letter of cleanWord) {
        letters.push(letter);
    }
    let reverso = letters.slice();
    letters.reverse();
    if(reverso.toString() == letters.toString()){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

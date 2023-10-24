const removeFromArray = function(inpArray) {
    const otherElements = Array.prototype.slice.call(arguments,1)
    return inpArray.filter((inItem)=> {
        for (element of otherElements){
            if (element === inItem) {
                return false;
            }
        }
        return true;
    })
};

// Do not edit below this line
module.exports = removeFromArray;

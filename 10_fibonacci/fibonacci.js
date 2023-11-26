const fibonacci = function(ind) {
    if(ind<0){
        return "OOPS";
    }

    let current = 1
    let prev = 0
    for(let i = 0; i < ind; i++){
        current += prev;
        prev = current - prev;
    }

    return prev;
};

// Do not edit below this line
module.exports = fibonacci;

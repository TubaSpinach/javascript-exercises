const add = function(x,y) {
	return x + y
};

const subtract = function(x,y) {
	return x - y
};

const sum = function(range) {
	answer = 0;
  for(num in range) {
    answer += range[num];
  }
  return answer;
};

const multiply = function(range) {
  answer = 1;
  for(num in range) {
    answer *= range[num];
  }
  return answer;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

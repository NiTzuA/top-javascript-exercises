const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0) {
        return "ERROR";
    }
    if (max < min) {
        temp = max;
        max = min;
        min = temp;
    }
    let output = 0;
    for (let i = min; i <= max; i++)
    {
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;

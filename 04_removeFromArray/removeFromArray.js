const removeFromArray = function() {
    const numArr = arguments[0];
    let removedNums = new Map();
    let output = [];

    for (let i = 1; arguments[i] != null; i++)
    {
        removedNums.set(arguments[i], i);
    }

    for (let i = 0; i < numArr.length; i++) {
        if (!removedNums.has(numArr[i])) {
            output.push(numArr[i]);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;

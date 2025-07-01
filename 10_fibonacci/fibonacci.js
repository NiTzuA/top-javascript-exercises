const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    let fiboSeq = [0, 1];
    while (num - 2 >= 0) {
        let nextVal = fiboSeq[0] + fiboSeq[1];
        fiboSeq.shift();
        fiboSeq.push(nextVal);
        num--;
    }
    return num == 0 ? 0 : fiboSeq[1];
};

module.exports = fibonacci;

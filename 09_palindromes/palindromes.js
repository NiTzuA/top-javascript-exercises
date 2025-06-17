const palindromes = function (str) {
    let a = 0;
    let b = str.length - 1;
    
    while (a < b) {
        if (!/[a-z0-9]/i.test(str[a])) {
            a++;
            continue;
        }
        if (!/[a-z0-9]/i.test(str[b])) {
            b--;
            continue;
        }

        if (str[a].toLowerCase() != str[b].toLowerCase()) {
            return false;
        }
        a++;
        b--;
    }

    return true;
};

/*
My idea for now is to create a function that checks the following first:

is pointer A looking at a letter? if not, increment
is pointer B looking at a letter? if not, decrement
is A and B equal? If not, return false
is pointer A > B, if true return true

thank leetcode

*/

// Do not edit below this line
module.exports = palindromes;

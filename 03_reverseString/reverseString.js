const reverseString = function(str) {
    // initial solution
    // let chars = str.split('');
    // let result = "";
    // for (i = chars.length - 1; i >= 0; i--){
    //     result += chars[i];
    // }
    // return result;
    return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;

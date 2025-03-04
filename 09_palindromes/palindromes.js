const palindromes = function (str) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    // change to lowercase
    str = str
        .toLowerCase()
        .split('')
        .filter((char) => alphanumeric.includes(char))
        .join('');

    // check if palindrome
    let l = 0, r = str.length - 1;
    while (l < r){
        if (str[l] !== str[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

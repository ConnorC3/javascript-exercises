const removeFromArray = function(arr, ...args) {
    const result = [];

    // inital solution
    // const args = Array.from(arguments);
    
    // for (i = 0; i < arr.length; i++){
    //     if (!args.includes(arr[i])){
    //         result.push(arr[i]);
    //     }
    // }
    // return result;

    // using forEach
    arr.forEach(element => {
        if (!args.includes(element)){
            result.push(element);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

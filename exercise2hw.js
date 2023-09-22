const concatenateStrings = (arr1 , arr2) => {
 
    return arr1.join(arr2);
};


console.log(concatenateStrings(['apple', 'banana', 'cherry'], ', ')); // Should log "apple, banana, cherry"
console.log(concatenateStrings(['one', 'two', 'three'], ' & ')); // Should log "one & two & three"
console.log(concatenateStrings(['first', 'second'], ' --> ')); // Should log "first --> second"
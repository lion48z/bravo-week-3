/*Exercise 1:
Write an arrow function called findMax that takes an array of numbers and returns the maximum number.
 */

const findMax = (numbers) => {
    return Math.max(...numbers);
}
//other Math.floor round down Math.ceil round up 



console.log(findMax([1, 2, 3])); // Should log 3
console.log(findMax([-5, -10, -1])); // Should log -1
console.log(findMax([10, 20, 10, 20, 30, 20, 10])); // Should log 30
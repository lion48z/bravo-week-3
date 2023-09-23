//Exercise 7
//Given an array containing three numerical values representing the dimensions of a box (length, width, height),
//use array destructuring to assign these values to individual variables l, w, and h.
//Log the variables to verify and use them to calculate and log the volume of the box.
let dimensions = [30, 50, 10];
const [l, w, h] = dimensions;
console.log(w);
console.log(l);
console.log(h);

const volume = l * w * h;
console.log(volume);
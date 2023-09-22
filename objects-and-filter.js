//object notation
const car ={
    make: "Toyota",
    'model': "Camry",
    year: 2020
};

//console.log(`The make of the car is ${car.make}`);
//console.log(`The model of the car is ${car['model']}`);

car.mileage = 50000;

//console.log(`The car's starting mileage is ${car.mileage}`);   
//array filter method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter(number => number % 2 ===0);
const oddNumbers = numbers.filter(number => number % 2 === 1);
//console.log(evenNumbers);   
//console.log(oddNumbers);

 const myNumbers = [1, -2, 0, - 3, 10];

 const negNumbers = myNumbers.filter(number => number >= 0);
 //console.log(negNumbers);

 const words = ["apple", "is", "good", "are", "for"];
 const longWords = words.filter(word => word.length >= 4);
 //console.log(longWords);

 const employees = [{name: 'John', age: 25},
                    {name: 'Jane', age: 20},
                    {name: 'Mike', age: 30},
                    {name: 'Jill', age: 27},
                    {name:  'Sam', age: 19}];
const invitedEmployees = employees.filter(employee => employee.age >= 21);
//console.log(invitedEmployees);

const invitedNames = invitedEmployees.map(employee => employee.name);
//console.log(invitedNames);
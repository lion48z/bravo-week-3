const fruits = ["apple", "banana", "cherry", "durian", "elderberry"];
const [firstFruit, secondFruit, thirdFruit, fourthFruit, fifthFruit] = fruits;
//console.log(firstFruit);
//console.log(fourthFruit);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

const {firstName: first, lastName: last, age: age} = person;

//console.log(last);

// simulating API data .json
const user = {
    id: 1,
    name: "John Doe",
    address: {
        street:'123 Main St',
        city: "Anytown"
    }
};

/*console.log(user.name);
console.log(user.address.street);*/

const {
    name,
    address: {street, city }
} =user;

console.log(name);
console.log(street);
console.log(city);

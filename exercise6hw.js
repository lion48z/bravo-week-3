//Exercise 6
//Given an array of produce objects, use the filter method to create a new 
//array containing only the ‘Fruit’ type products that have a quantity less than 10.

const produce = [
  { name: 'Apple', type: 'Fruit', quantity: 10 },
  { name: 'Carrot', type: 'Vegetable', quantity: 20 },
  { name: 'Orange', type: 'Fruit', quantity: 5 },
  { name: 'Celery', type: 'Vegetable', quantity: 15 },
  { name: 'Banana', type: 'Fruit', quantity: 2 },
  { name: 'Spinach', type: 'Vegetable', quantity: 30 },
  { name: 'Grapes', type: 'Fruit', quantity: 8 },
  { name: 'Lettuce', type: 'Vegetable', quantity: 5 },
];

const fruitType = produce.filter(item => item.type === 'Fruit' && item.quantity < 10);
console.log(fruitType);


//Expected Output:
/*
[
  { name: 'Orange', type: 'Fruit', quantity: 5 },
  { name: 'Banana', type: 'Fruit', quantity: 2 },
  { name: 'Grapes', type: 'Fruit', quantity: 8 }
]
*/
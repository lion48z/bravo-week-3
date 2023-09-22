/*Exercise 5:
Given an array of objects representing tasks with a completed boolean property, 
use filter to return a new array containing only the objects representing uncompleted tasks.
*/
const tasks = [
  { name: 'Complete JavaScript Exercises', completed: true },
  { name: 'Attend JavaScript Workshop', completed: false },
  { name: 'Read about Arrow Functions', completed: true },
  { name: 'Create a Presentation on Destructuring', completed: false },
  { name: 'Study for JavaScript Quiz', completed: false },
  { name: 'Submit Assignment on time', completed: true },
  { name: 'Attend Study Group on Map and Filter', completed: true },
  { name: 'Watch Tutorial on JavaScript Basics', completed: false },
  { name: 'Complete Practice Problems on Arrays', completed: true },
  { name: 'Participate in JavaScript Hackathon', completed: false }
];

const incompleteTasks =  tasks.filter(task => task.completed == false);

console.log(incompleteTasks);

/*Expected output
[
  { name: 'Attend JavaScript Workshop', completed: false },
  { name: 'Create a Presentation on Destructuring', completed: false },
  { name: 'Study for JavaScript Quiz', completed: false },
  { name: 'Watch Tutorial on JavaScript Basics', completed: false },
  { name: 'Participate in JavaScript Hackathon', completed: false }
]*/
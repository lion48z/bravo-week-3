const student = {
    firstName: 'Alex',
    lastName: 'Lee',
    grades: {
      math: 90,
      science: 80,
      english: 85
    }
  };

const {
    firstName,
    lastName,
    grades: {math, science,  english
}
} =student;

const averageGrade = (math + science + english) / 3;

console.log(`Name: ${firstName} ${lastName}, Average: ${averageGrade}`);
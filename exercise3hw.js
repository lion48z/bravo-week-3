const users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Michael', lastName: 'Jordan' },
    { firstName: 'Sara', lastName: 'Connor' },
    { firstName: 'Thomas', lastName: 'Edison' },
    { firstName: 'Marie', lastName: 'Curie' },
    { firstName: 'Albert', lastName: 'Einstein' },
    { firstName: 'Isaac', lastName: 'Newton' },
    { firstName: 'Galileo', lastName: 'Galilei' },
    { firstName: 'Leonardo', lastName: 'da Vinci' }
  ];
  
  const usersWithFullName = users.map(({ firstName, lastName }) => ({
    fullName: `${firstName} ${lastName}`
  }));
 
  
  console.log(usersWithFullName[0].fullName === 'John Doe'); // Should be true
  console.log(usersWithFullName[5].fullName === 'Marie Curie'); // Should be true
  console.log(usersWithFullName[6].fullName === 'Albert Einstein'); // Should be true
  console.log(usersWithFullName[9].fullName === 'Leonardo da Vinci'); // Should be true
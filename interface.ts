interface Human {
  firstName: string;
  lastName: string;
}

function fullname(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}
let x = {
  firstName: "Vaibhav",
  lastName: "Singh",
};

// fullname(x);

function CompleteName(person: Human) {
  console.log(`${person.firstName} ${person.lastName}`);
}

CompleteName(x);

// In above fullName Function we use x to be operated but is the number of variables in object person or x is too much then we to get somethin from it the code will become clumsy
// to overcome this we have the concept of interfaces

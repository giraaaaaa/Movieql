export const people = [
  {
    id: "0",
    name: "Gira",
    age: 99,
    gender: "male"
  },
  {
    id: "1",
    name: "Mira",
    age: 199,
    gender: "fwmale"
  },
  {
    id: "2",
    name: "Gura",
    age: 299,
    gender: "male"
  },
  {
    id: "3",
    name: "Guira",
    age: 399,
    gender: "female"
  },
  {
    id: "4",
    name: "Kara",
    age: 499,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};

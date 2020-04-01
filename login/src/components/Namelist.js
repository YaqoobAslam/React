import React from "react";

import Person from './Person'

function Namelist() {
  const persons = [
    {
      id: 1,
      name: "Kashif",
      age: 24,
      skill: "Vue"
    },
    {
      id: 2,
      name: "Rajash",
      age: 19,
      skill: "Angular"
    },
    {
      id: 3,
      name: "Bruce",
      age: 20,
      skill: "React"
    }
  ];
//   const personList = persons.map(person => <Person key ={person.id} person={person}></Person>);
  const personList = persons.map(person => <Person key ={person.id} person={person}></Person>);


  return <div>{personList}</div>;
}

export default Namelist;

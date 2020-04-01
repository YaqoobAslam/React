import React from "react";

// function Greek() {
//     return <h1>Hello Yaqoob </h1>
// }
const Greek = probs =>{
  const {name, heroName} = probs
  return (
    <div>
     <h1>{name} {heroName} </h1>
    </div>
  );
};
export default Greek;

import React, { Component } from "react";
class Welcome extends Component {
 render() {
   const {name, heroName} = this.props //Deconstructing name and heroName
    return (
      <div>
        Welcome {name} {heroName}
      </div>
    );
  }
}
export default Welcome;

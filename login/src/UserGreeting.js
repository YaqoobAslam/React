import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    // let message
    // if(this.state.isLoggedIn){
    //     return(
    //        message = <div>Welcome UserGreeting</div>
    //     )
    // }else{

    //     return(
    //         message = <div>Welcome Guest</div>
    //     )
    // }

    // return <div>{message}</div>

    return this.state.isLoggedIn ? (
      <div>Welcome UserGreeting</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default UserGreeting;

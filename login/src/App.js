import React, { Component } from "react";
import "./App.css";
import Namelist from "./components/Namelist";
// import UserGreeting from "./UserGreeting";
// import FunctionClick from "./components/functionClick";
// import ClassClick from "./components/ClassClick";
// import Greek from './components/greek';
// import Welcome from './components/Welcome';
// import Message from "./components/message";
// import Counter from "./components/Counter";
// import Hello from './Hello';
// import EventBind from './components/EventBind';
// import ParentComponent from "./components/ParentComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Namelist></Namelist>
        {/* <UserGreeting></UserGreeting> */}
        {/* <ParentComponent></ParentComponent> */}

        {/* <EventBind></EventBind> */}

        {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}

        {/* <Counter></Counter> */}

        {/* <Greek name="Khan" heroName="Wonder Women"></Greek> */}

        {/* <Message> </Message>
         <Greek name="Yaqoob" heroName="Batsman">
        <p>This is child</p>
      </Greek> 
      <Greek name="Ahmad" heroName="Superman" >
      <button>Button</button>
      </Greek> */}

        {/* <Welcome name="Sohail" heroName="Batsman"></Welcome>
      <Welcome name="Ahmad" heroName="Superman"></Welcome>
      <Welcome name="Waqas" heroName="Wonder Women"></Welcome> */}
        {/* <Hello></Hello> */}
      </div>
    );
  }
}
export default App;

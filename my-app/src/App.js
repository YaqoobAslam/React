import React, { Component } from "react";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Menu Dishes={this.state.Dishes}></Menu>
      </div>
    );
  }
}

export default App;

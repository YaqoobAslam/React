import React from "react";
import "./App.css";
import UserTable from "./UserTable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
      color: "",
      show: true,
      messagealert: "Welcome"
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  //-------------------------------------------------------------------------

  handleSubmit(event) {
    if (
      this.state.email === "happyyaqoob@gmail.com" &&
      this.state.password === "Yaqoob"
    ) {
      this.setState({
        message: "Successfully Login",
        email: "",
        password: "",
        color: "green",
        show: !this.state.show
      });
    } else {
      this.setState({
        message: "Incorrect Password",
        email: "",
        password: "",
        color: "red"
      });
    }
    event.preventDefault();
  }

  //-------------------------------------------------------------------------

  render() {
    return (
      <div>
        <div>
          {this.state.show ? (
            <form onSubmit={this.handleSubmit}>
              <div>
                <p style={{ color: this.state.color }}>{this.state.message}</p>

                <label>
                  <input
                    type="email"
                    name="txtEmail"
                    placeholder="Email"
                    required
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                  <br />
                  <input
                    type="password"
                    name="txtPassword"
                    placeholder="password"
                    required
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                  <br />
                </label>
              </div>
              <button type="submit">Login</button>
            </form>
          ) : (
            <p>
              <UserTable></UserTable>
            </p>
          )}
        </div>
      </div>
    );
  }
}
export default App;

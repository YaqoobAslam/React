import React, { Component } from "react";

class UserTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { name: "Kashif Nazar", age: 35, email: "kashif.nazar@gmail.com" },
        { name: "Wasif", age: 21, email: "wasif@gmail.com" },
        { name: "Ali", age: 19, email: "ali@gmail.com" },
        { name: "Saad", age: 16, email: "saad@gmail.com" },
        { name: "Asad", age: 25, email: "asad@gmail.com" }
      ]
    };
  }
  renderTableData() {
    return this.state.users.map(user => {
      const { name, age, email } = user;
      return (
        <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.users[0]);
    return header.map(key => {
      return <th> {key.toUpperCase()}</th>;
    });
  }
  render() {
    return (
      <div>
      <h1 id='title'>Welcome</h1>
        <table id='user'>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}
export default UserTable;

import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "CRUD App",
      employeeData: [],
      act: 0,
      index: "",
    };
  }
  Submit = (e) => {
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.txtName.value;
    let age = this.refs.txtAge.value;
    if (this.state.act === 0) {
      let newEmployee = {
        "name": name,
        "age": age,
      };
      employeeData.push(newEmployee);
    } 
    else {
      let index = this.state.index;
      employeeData[index].name = name;
      employeeData[index].age = age;
    }

    this.setState({
      employeeData: employeeData,
      act: 0,
    });
    this.refs.myForm.reset();
    this.refs.txtName.focus();
  };
  Delete = (i) => {
    let employeeData = this.state.employeeData;
    employeeData.splice(i,1);
    this.setState({
      employeeData: employeeData,
    });
  };
  Update = (i) => {
    let employeeData = this.state.employeeData[i];
    this.refs.txtName.value = employeeData.name;
    this.refs.txtAge.value = employeeData.age;

    this.setState({
      employeeData: employeeData,
      act: 1,
      index: 'i',
    });
  };
  render() {
    let employeeData = this.state.employeeData;
    return (
      <div>
        <h1>
          <b>{this.state.title}</b>
        </h1>
        <form ref="myForm">
          <center>
            <label>Name</label>
            <input type="text" ref="txtName" placeholder="Enter Name"></input>
            <lable>Age</lable>
            <input type="number" ref="txtAge" placeholder="Enter Age"></input>
            <br />
            <br />
            <button onClick={(e) => this.Submit(e)}>Save</button>
          </center>
        </form>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {employeeData.map((data, i) => (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>
                <button onClick={(i) => this.Update(i)}>Edit</button>
              </td>
              <td>
                <button onClick={(i) => this.Delete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default App;

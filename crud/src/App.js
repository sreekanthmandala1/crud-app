import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "CRUD App",
      employeeData: [],
      act: 0,
      idx: "",
    }
  }
  componentDidMount(){
    this.refs.txtName.focus();
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
      let index = this.state.idx;
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
  Delete = (index) => {
    let employeeData = this.state.employeeData;
    employeeData.splice(index,1);
    this.setState({
      employeeData: employeeData,
    });
  };
  Update = (index) => {
    let employeeData = this.state.employeeData[index];
    this.refs.txtName.value = employeeData.name;
    this.refs.txtAge.value = employeeData.age;

    this.setState({
      employeeData: employeeData,
      act: 1,
      idx: 'index',
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
          {employeeData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>
                <button onClick={(index) => this.Update(index)}>Edit</button>
              </td>
              <td>
                <button onClick={(index) => this.Delete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default App;

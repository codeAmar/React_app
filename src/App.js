import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    person:[
      { name : "Amar", age : 28, gender :"male", hobby: "cricket"},
      { name : "Rozal", age : 27, gender :"male", hobby: "soccer"},
      { name : "Stephanie", age : 26, gender :"female", hobby: "frizbee"},
    ]
  };

  changeNameHandler = () => {
    this.setState({
      person:[
        { name : "Amarjot", age : 28, gender :"male", hobby: "cricket"},
        { name : "Rozal", age : 27, gender :"male", hobby: "soccer"},
        { name : "Stephanie", age : 27, gender :"female", hobby: "friz"},
      ] 
    });
  };

      render() {
        return (
          <div className="App">
            <button onClick = {this.changeNameHandler}>Click me</button>
            <Person name = {this.state.person[0].name} age= {this.state.person[0].age} gender = {this.state.person[0].gender}>{this.state.person[0].hobby}</Person>
            <Person name = {this.state.person[1].name} age= {this.state.person[1].age} gender = {this.state.person[1].gender}>{this.state.person[1].hobby}</Person>
            <Person name = {this.state.person[2].name} age= {this.state.person[2].age} gender = {this.state.person[2].gender}>{this.state.person[2].hobby}</Person>
          </div>
        );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";
import UserInput from "./Assign1/UserInput";
import UserOutput from "./Assign1/UserOutput";

class App extends Component {

  state = {
    person: [
      {
        name: "Amar",
        age: 28,
        gender: "male",
        hobby: "cricket"
      }, {
        name: "Rozal",
        age: 27,
        gender: "male",
        hobby: "soccer"
      }, {
        name: "Stephanie",
        age: 26,
        gender: "female",
        hobby: "frizbee"
      }
    ],
    color: "orange_class",
    username: "Amarjot"
  };

  changeNameHandler = () => {
    this.setState({
      person: [
        {
          name: "Amarjot",
          age: 28,
          gender: "male",
          hobby: "cricket"
        }, {
          name: "Rozal",
          age: 27,
          gender: "male",
          hobby: "soccer"
        }, {
          name: "Stephanie",
          age: 27,
          gender: "female",
          hobby: "friz"
        }
      ]
    });
  };

  changeColor = (event) => {
    this.setState({
      color: event
        .target
        .classList
        .toggle('red')
    });
  }

  changeUserName = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changeNameHandler}>Click me</button>
        <Person
          colorp
          ={this.state.color}
          click={this.changeColor}
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          gender={this.state.person[0].gender}>{this.state.person[0].hobby}</Person>
        <Person
          colorp
          ={this.state.color}
          click={this.changeColor}
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          gender={this.state.person[1].gender}>{this.state.person[1].hobby}</Person>
        <Person
          colorp
          ={this.state.color}
          click={this.changeColor}
          name={this.state.person[2].name}
          age={this.state.person[2].age}
          gender={this.state.person[2].gender}>{this.state.person[2].hobby}</Person>
        <UserOutput username={this.state.username} name="Amar"/>
        <UserOutput username={this.state.username} name="Rozal"/>
        <UserOutput username={this.state.username} name="Juhi"/>
        <UserInput initialU={this.state.username} click={this.changeUserName}/>
      </div>
    );
  }
}

export default App;

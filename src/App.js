import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";
import Button from "./Button/Button";

class App extends Component {

  state = {
    person: [
      {
        id: 1,
        name: "Amar",
        age: 28,
        gender: "male",
        hobby: "cricket"
      }, {
        id: 2,
        name: "Rozal",
        age: 27,
        gender: "male",
        hobby: "soccer"
      }, {
        id: 3,
        name: "Stephanie",
        age: 26,
        gender: "female",
        hobby: "frizbee"
      }
    ],
    listVisible: true
  };

  changeNameHandler = () => {
    let listVisibles = this.state.listVisible;
    this.setState({
      listVisible: !listVisibles
    })
  };

  render() {

    
    let persons = null;
    if (this.state.listVisible) {
      persons = this
        .state
        .person
        .map((elem) => {
          return (
            <Person name={elem.name} age={elem.age} gender={elem.gender} key={elem.id}>{elem.hobby}</Person>
          )
        });
    }


    let dropButton = (
      <Button 
      btnHandler = {this.changeNameHandler}/>
    );

    
    
    return (
      <div className="App">
        {dropButton}
        {persons}
      </div>
    );
  }
}

export default App;

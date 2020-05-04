import React, { Component } from 'react';
// import styled from 'styled-components';

import classes from './App.module.css';
import Person from '../components/Persons/Person/Person.js';

// const StyledButton = styled.button`
//   background-color: ${props => props.altStyle ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   border-radius: 5px;

//   &:hover {
//     background-color: ${props => props.altStyle ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      { id: 'asdf', name: 'Cricket', age: 37 },
      { id: 'uiop', name: 'Christian', age: 39 },
      { id: 'jkl', name: 'Sarah', age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  // one option for immutability: slice method copies the array before altering it
    // const persons = this.state.persons.slice();
    // or, 2nd option; create a new array using spread operator and put contents of old persons array into it
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // const buttonStyle = {
    //   backgroundColor: '#195106',
    //   color: '#0fc7be',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   borderRadius: '4px',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      btnClass.push(classes.Red);
      // buttonStyle.backgroundColor = 'hsl(312, 81%, 37%)';
      //   buttonStyle[':hover'] = {
      //     color: 'brown',
      //     backgroundColor: 'pink'
      //   }
      //   buttonStyle.color = 'hsl(182, 81%, 70%)'
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push('red'); // classes = ['red']
    }
    // this is different from an else if because we want BOTH

    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold'); // classes = ['red', 'bold']
    }

      // we need join because now classes is an array but we need a string
      // without styled components package, 'StyledButton' goes back to being 'button'
      // style={buttonStyle} was removed from button for styled-components
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App by Cricket</h1>
        <p className={assignedClasses.join( ' ' )}>It sure is a relief when this works...</p>
        <button
          className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler}>Toggle People</button>
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
        // previous StyledButton component, set aside for now
        // <StyledButton altStyle={this.state.showPersons} onClick={this.togglePersonsHandler}>
        // Toggle Persons
        // </StyledButton>
  }
}

export default App;

import React, { Component } from 'react';
// import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

// the below commented out chunk is from utilizing styled components
// const StyledButton = styled.button`
//     background-color: ${props => props.altStyle ? 'salmon' : '#195106'};
//     color: #0fc7be;
//     font: inherit;
//     border: 1px solid blue;
//     padding: 8px;
//     cursor: pointer;
//     border-radius: 4px;

//     &:hover {
//       color: orange;
//       background-color: ${props => props.altStyle ? 'lightgreen' : '#195106'};
//     }
// `;

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Chili', age: 5.5 },
      { id: 'uiop1', name: 'Christian', age: 39 },
      { id: 'jkl1', name: 'Sarah', age: 29 }
    ],
    showPersons: false
  };


  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // again, using the spread operator creates a new array rather than altering the original state array of data
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  deletePersonHandler = (personIndex) => {
    // one option for immutability: slice method copies the array before altering it
    // const persons = this.state.persons.slice();
    // or, 2nd option; create a new array using spread operator and put contents of old persons array into it
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  // the () => this.switchNameHandler('Chili...') is not recommended but is an example of an alternative

  render() {
    const buttonStyle = {
      backgroundColor: '#195106',
      color: '#0fc7be',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '4px',
      // this pseudo selector hover is possible because of Radium
      ':hover': {
        color: 'black',
        backgroundColor: 'lightgreen'
      }
    };

    let persons = null;

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
                changed={(event)=> this.nameChangedHandler(event, person.id)}
              />
            );
          })}
          </div>
      );


      //   buttonStyle.backgroundColor = 'hsl(312, 81%, 37%)';
      //   buttonStyle[':hover'] = {
      //     color: 'brown',
      //     backgroundColor: 'pink'
      //   }
      //   buttonStyle.color = 'hsl(182, 81%, 70%)'
      }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // class will be ['red']
    }
    // this is different from an else if because we want BOTH
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes will be ['red', 'bold']
    }

    // we need join because now classes is an array but we need a string
    // without styled components package, 'StyledButton' goes back to being 'button'
          // style={buttonStyle} was removed from button for styled-components
    return (
      <div className="App">
        <h1>Hi, I'm a React App by Cricket</h1>
        <p className={classes.join(' ')}>So... does this work?</p>
        <div className="button"
          altStyle={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle People</div>
          {persons}
        </div>
    );
  }
}

export default App;

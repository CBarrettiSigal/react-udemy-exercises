import React, { Component } from 'react';
// import styled from 'styled-components';
import Cockpit from '../components/Cockpit/Cockpit.js'
import classes from './App.module.css';
import Persons from '../components/Persons/Persons.js';
import withClass from '../hoc/withClass.js';
import Auxiliary from '../hoc/Auxiliary.js';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

   state = {
    persons: [
      { id: 'asdf', name: 'Cricket', age: 37 },
      { id: 'uiop', name: 'Christian', age: 39 },
      { id: 'jkl', name: 'Sarah', age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // this one is probably going to be phased out
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(props) {
    console.log('[App.js] componentDidMount', props);
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    return (
      <Auxiliary>
        <button onClick= {() => {
          this.setState({showCockpit: false});
        }}>

          Remove Cockpit Test
          </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
          ) : null}
          {persons}
      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);

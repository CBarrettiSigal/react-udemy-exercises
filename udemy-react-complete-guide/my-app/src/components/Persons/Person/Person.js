import React, { Component } from 'react';
// import styled from 'styled-components';
import classes from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary.js';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context.js';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  // this allows React to connect this class-based component to your context
  // for a functional component, you must use the hook useContext
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render () {
    console.log('[Person.js] rendering...')
    return (
      <Auxiliary>
          {this.context.authenticated ? (
            <p>Authenticated!</p>
            ) : (
          <p>Please Log In</p>
          )}

          <p onClick={this.props.click}>
            I'm {this.props.name}, I'm a Kick-Ass Person, and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            // ref={(inputRefTest) => {this.inputElement = inputRefTest}}
            ref={this.inputElementRef}
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
      </Auxiliary>
    );
  }
}


export default withClass(Person, classes.Person);

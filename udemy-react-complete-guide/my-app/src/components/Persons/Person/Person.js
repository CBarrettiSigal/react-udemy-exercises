import React, { Fragment, Component } from 'react';
// import styled from 'styled-components';
import classes from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary.js';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  render () {
    console.log('[Person.js] rendering...')
    return (
      <Auxiliary>
        <div>
          <p onClick={this.props.click}>
            I'm {this.props.name}, I'm a Kick-Ass Person, and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name} />
        </div>
      </Auxiliary>
    );
  }
}


export default withClass(Person, classes.Person);

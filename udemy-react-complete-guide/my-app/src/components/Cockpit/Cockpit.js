import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
      btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    // this is different from an else if because we want BOTH

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join( ' ' )}>It sure is a relief when this works...</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle People</button>
    </div>
    );
}

export default cockpit;

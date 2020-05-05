import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    // this is basically componentDidMount and componentDidUpdate in one step
    console.log('[Cockpit.js]useEffect');
    // can send HTTP request in here
    setTimeout(() => {
      alert('Dummy Alert');
     }, 1000);
      return () =>{
        console.log('[Cockpit.js] cleanup work in useEffect')
      };
;  }, []);
  // now this will only perform the action the FIRST time the page loads

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
      btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    // this is different from an else if because we want BOTH

    if (props.personsLength <= 1) {
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
// memo will store a snapshot of the component and only re render if its input changes
export default React.memo(Cockpit);

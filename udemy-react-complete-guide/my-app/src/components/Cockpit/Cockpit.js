import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context.js';

const Cockpit = props => {
  // this line is about automatically clicking the toggle button once the code is parsed and rendered once
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(useContext(AuthContext));
  // this is better for using Refs because this only works after the code has been rendered the first time
  useEffect(() => {
    // this is basically componentDidMount and componentDidUpdate in one step
    console.log('[Cockpit.js]useEffect');
    // can send HTTP request in here
    setTimeout(() => {
      alert('Dummy Alert');
     }, 1000);
    toggleBtnRef.current.click();
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
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>
        Toggle People
        </button>
        <button onClick={authContext.login}>Log In</button>
    </div>
    );
}
// memo will store a snapshot of the component and only re render if its input changes
export default React.memo(Cockpit);

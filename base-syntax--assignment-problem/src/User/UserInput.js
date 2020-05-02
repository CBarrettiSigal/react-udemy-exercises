import React from 'react';

const userInput = ( props ) => {
  const inputStyle = {
    border: '2px solid red'
  };

  return (
    <div>
    <p>Your Username is {props.userName}</p>
    <input style={inputStyle} type="text" onChange={props.changed} value={props.userName}/>
    </div>
    )
};

export default userInput;

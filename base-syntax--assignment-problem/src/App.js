import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput.js';
import UserInput from './User/UserInput.js';

class App extends Component {
  state = {
    users: [
      {userName: 'Cricket', age: 37}
    ]
  }

  inputChangedHandler = (event) => {
      this.setState({
      users: [
      { userName: event.target.value, age: this.state.users[0].age}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput
          userName={this.state.users[0].userName}
          changed={this.inputChangedHandler} />
        <UserOutput userName={this.state.users[0].userName}
                    changed={this.inputChangedHandler}
                    age={this.state.users[0].age} />
        <UserOutput userName='Chili Cheese'
                    age='5'/>
      </div>
    );
  }
}

export default App;

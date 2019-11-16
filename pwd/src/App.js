import React from 'react';
import './App.css';

const MIN_LENGTH = 6

class App extends React.Component {
  state = {
    password: '',
    error: false
  }

  validatePassword() {
    const { password } = this.state
    this.setState({ error: password.length <= MIN_LENGTH })
  }

  render() {
    const { error } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1>Registration page</h1>
          <p>
            <label htmlFor="pwd">Password: </label>
            <input id="pwd" onChange={(e) => this.setState({ password: e.target.value })} type="password" />
            <div>Password must have minimum length of 6 characters</div>
          </p>
          {error &&
            <p>Password must be longer than {MIN_LENGTH} characters</p>
          }
          <p>
            <button onClick={() => this.validatePassword()}>Submit</button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-4">
            <h1>lunch time</h1>
          </div>
        </div>
        <div className="row col-md-4">
          <p>Where to lunch today?</p>
        </div>
      </div>
    );
  }
}

export default App;

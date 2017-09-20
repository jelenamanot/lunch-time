import React, { Component } from 'react';
import '../styles/App.css';

import LunchService from './Service';
import AllRestaurants from './AllRestaurants';

class App extends Component {

  constructor() {
    super();
    this.state = {
      allRestaurants: []
    }
  }

  componentDidMount() {
    LunchService.getAllData().then(response => {
      console.log(response.data.results);
      this.setState({allRestaurants: response.data.results});
      console.log(this.state.allRestaurants);
    });
  }

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
        <div className="row">
          <AllRestaurants all={this.state.allRestaurants} />
        </div>
        
      </div>
    );
  }
}

export default App;

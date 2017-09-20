import React, { Component } from 'react';

import LunchService from './Service';
import Header from './Header';
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
      console.log(response.data.results[0].name);
      this.setState({allRestaurants: response.data.results});
      console.log(this.state.allRestaurants);
    });
  }

  render() {
    return (
      <div className="App container">
        <Header />
        <div className="row">
          <AllRestaurants all={this.state.allRestaurants} />
        </div>
      </div>
    );
  }
}

export default App;

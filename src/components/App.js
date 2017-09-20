import React, { Component } from 'react';

import LunchService from './Service';
import Header from './Header';
import AllRestaurants from './AllRestaurants';

class App extends Component {

  constructor() {
    super();
    this.state = {
      fetchRestaurants: []
    }
  }

  componentDidMount() {
    LunchService.getAllData().then(response => {
      console.log(response.data.results[0].name);
      this.setState({fetchRestaurants: response.data.results});
      console.log(this.state.fetchRestaurants);
    });
  }

  render() {
    return (
      <div className="App container">
        <Header />
        <div className="row">
          <AllRestaurants allRestaurants={this.state.fetchRestaurants} />
        </div>
      </div>
    );
  }
}

export default App;

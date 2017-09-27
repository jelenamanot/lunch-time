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
      this.setState({fetchRestaurants: response.data.results});
    });
  }

  render() {
    return (
      <div className="App container">
        <Header />
        <div className="row">
          <AllRestaurants allRestaurants={this.state.fetchRestaurants} />
        </div>
        <footer>
          <p className="text-center">&copy; <a href="http://www.linkedin.com/in/jelenanesicm">Jelena</a>, 2017.</p>
        </footer>
      </div>
    );
  }
}

export default App;

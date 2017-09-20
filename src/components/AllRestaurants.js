import React, { Component } from 'react';
import '../styles/AllRestaurants.css';

import SingleRestaurant from './SingleRestaurant';

class AllRestaurants extends Component {
  
  render() {
    return (
      <div className="AllRestaurants col-md-12">
        All Restaurants
        {console.log('props',this.props.all[0])}
      </div>
    );
  }
}

export default AllRestaurants;

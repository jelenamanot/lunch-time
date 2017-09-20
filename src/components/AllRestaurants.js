import React, { Component } from 'react';
import '../styles/AllRestaurants.css';

import SingleRestaurant from './SingleRestaurant';

class AllRestaurants extends Component {

  render() {
    return (
      <div className="AllRestaurants container">
        {
          this.props.all.map((data, index) => {
            return(
              <SingleRestaurant key={index} allRes={data} />
            );
          })
        }
      </div>
    );
  }
}

export default AllRestaurants;

import React, { Component } from 'react';
import '../styles/AllRestaurants.css';

import SingleRestaurant from './SingleRestaurant';

class AllRestaurants extends Component {

  render() {
    return (
      <div className="AllRestaurants container">
        {
          this.props.allRestaurants.map((data, index) => {
            // console.log('single restaurant - ', data.name, data);
            return(
              <SingleRestaurant key={index} restaurantInfo={data} />
            );
          })
        }
      </div>
    );
  }
}

export default AllRestaurants;

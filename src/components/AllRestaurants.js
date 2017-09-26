import React, { Component } from 'react';
import '../styles/AllRestaurants.css';

import SingleRestaurant from './SingleRestaurant';

class AllRestaurants extends Component {

  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)});
  }

  resetSearch(event) {
    this.setState({search: ''});
  }

  render() {
    let filteredRestaurants = this.props.allRestaurants.filter(
      (data) => {
        return data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    
    return (
      <div className="AllRestaurants container">
        <div className="row">
          <div className="col-md-5 wrap-input">
            <input
              placeholder="Type restaurant name here"
              className="form-control search-name" 
              
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </div>
        </div> {/*end input field*/}
        <div className="row aligner">
          <button 
            className="btn btn-primary btn-reset"
            onClick={this.resetSearch.bind(this)}
          >
          reset
          </button>
        </div> {/*end reset button*/}
        <div className="row">
        {
          filteredRestaurants.map((data, index) => {
            // console.log('single restaurant - ', data.name, data);
            return(
              <SingleRestaurant key={index} restaurantInfo={data} />
            );
          })
        }
        </div>
      </div>
    );
  }
}

export default AllRestaurants;

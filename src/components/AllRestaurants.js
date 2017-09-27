import React, { Component } from 'react';
import '../styles/AllRestaurants.css';

import SingleRestaurant from './SingleRestaurant';

class AllRestaurants extends Component {

  constructor() {
    super();
    this.state = {
      search: '',
      selectedValue: ''
    }
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)});
  }

  resetSearch(event) {
    this.setState({search: ''});
  }

  // Trying out update country function
  updateCountry(e) {
    this.setState({
      selectedValue: e.target.value
    });
    console.log(this.state.selectedValue);

    let selectedCountry = this.props.allRestaurants.filter(
      (data) => {
        let selection;
        if(this.state.selectedValue === 'sr') {
          selection = data.address.country === 'Serbia';
        }
        else if(this.state.selectedValue === 'tn') {
          selection = data.address.country === 'The Netherlands'
        }
        return selection;
      }
    );
    console.log(selectedCountry);
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
          <select
            defaultValue={this.state.selectedValue}
            onChange={this.updateCountry.bind(this)}
          >
            <option value="sv">Select</option>
            <option value="sr">Serbia</option>
            <option value="tn">The Netherlands</option>
          </select>
        </div>
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
        <div className="row">
        {
           filteredRestaurants.length === 0 ?
           <div className="col-md-12 text-center no-results">
            <h2>there are no search results found</h2>
            </div>
           : <p></p>
        }
        </div>
      </div>
    );
  }
}

export default AllRestaurants;

import React, { Component } from 'react';
import '../styles/AllRestaurants.css';

import SingleRestaurant from './SingleRestaurant';

class AllRestaurants extends Component {

  constructor() {
    super();
    this.state = {
      search: '',
      selectedValue: 'all',
      loadPage: false
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      loadPage: true
    })
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)});
  }

  resetSearch(event) {
    this.setState({search: ''});
  }

  updateCountry(e) {
    let selection;
    if(e.target.value === 'Serbia') {
      selection = 'Serbia';
    }
    else if(e.target.value === 'The Netherlands') {
      selection = 'The Netherlands';
    }
    else if(e.target.value === 'all') {
      selection = 'all';
    }

    this.setState({selectedValue: selection});
  }

  render() {
    let searchedRestaurants = this.props.allRestaurants.filter((data) => {
        return data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    let optionSelected = searchedRestaurants.filter((data, index) => {
      if(this.state.selectedValue === 'all') {
        return data.address.country;
      };
      return data.address.country === this.state.selectedValue;
    });

    return (
      <div className="AllRestaurants container">
      { this.state.loadPage ?   
      <div>
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
          <div className="row aligner">
            <select
              defaultValue={this.state.selectedValue}
              onChange={this.updateCountry.bind(this)}
            >
              <option value="all">All</option>
              <option value="Serbia">Serbia</option>
              <option value="The Netherlands">The Netherlands</option>
            </select>
          </div> {/*end select*/}
          <div className="row">
          {
            optionSelected.length > 0 ?
            optionSelected.map((data, index) => {
              return(
                <SingleRestaurant key={index} restaurantInfo={data} />
              );
            }) :
            <div className="col-md-12 text-center no-results">
              <h2>there are no search results found</h2>
            </div>
          }
          </div>  
        </div> :
        <h2 className="text-center"> loading . . . </h2> }
      </div>
    );
  }
}

export default AllRestaurants;

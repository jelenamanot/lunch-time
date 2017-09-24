import React, { Component } from 'react';
import '../styles/SingleRestaurant.css';

class SingleRestaurant extends Component {

  render() {
    const name = this.props.restaurantInfo.name;
    const rating = this.props.restaurantInfo.rating;
    const city = this.props.restaurantInfo.address.city;
    const street = this.props.restaurantInfo.address.street;
    const country = this.props.restaurantInfo.address.country;

    let img;
    this.props.restaurantInfo.images.original.length > 0 
    ?  img = this.props.restaurantInfo.images.original 
    :  img = 'https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png'; 

    return (
      <div className="SingleRestaurant col-lg-4 col-md-6 col-sm-12">
        <p className="r-name">{name}</p>
        <p>Country: {country}</p>
        <p>City: {city}</p>
        <p>Street: {street}</p>
        <img src={img} alt={name} />
        <p className="r-rating"><span>{rating}</span>/100</p>
      </div>
    );
  }
}

export default SingleRestaurant;

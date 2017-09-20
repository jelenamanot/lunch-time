import React, { Component } from 'react';
import '../styles/SingleRestaurant.css';

class SingleRestaurant extends Component {

  render() {
    const name = this.props.allRes.name;
    const rating = this.props.allRes.rating;
    const city = this.props.allRes.address.city;
    const street = this.props.allRes.address.street;
    const country = this.props.allRes.address.country;

    let img;
    this.props.allRes.images.original.length > 0 
    ?  img = this.props.allRes.images.original 
    :  img = 'https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png'; 

    return (
      <div className="SingleRestaurant col-md-4">
        <p className="r-name">{name}</p>
        <p>Location: {city}, {country}</p>
        <p>Street: {street}</p>
        <img src={img} alt={name} />
        <p className="r-rating"><span>{rating}</span>/100</p>
      </div>
    );
  }
}

export default SingleRestaurant;

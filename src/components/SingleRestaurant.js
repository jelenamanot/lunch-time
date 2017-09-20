import React, { Component } from 'react';
import '../styles/SingleRestaurant.css';

class SingleRestaurant extends Component {

  render() {
    const name = this.props.allRes.name;
    const rating = this.props.allRes.rating;
    const city = this.props.allRes.address.city;
    const country = this.props.allRes.address.country;

    let img;
    this.props.allRes.images.original.length > 0 
    ?  img = this.props.allRes.images.original 
    :  img = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'; 

    return (
      <div className="SingleRestaurant col-md-4">
        <p><span className="r-name">{name}</span></p>
        <p>Location: {city}, {country}</p>
        <p>rating: {rating}</p>
        <img src={img} alt={name} />
        <hr/>
      </div>
    );
  }
}

export default SingleRestaurant;

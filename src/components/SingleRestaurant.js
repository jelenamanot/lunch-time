import React from 'react';
import '../styles/SingleRestaurant.css';

const SingleRestaurant = (props) => {
  const { name, rating } = props.restaurantInfo;
  const { city, street, country } = props.restaurantInfo.address;

  let img;
  props.restaurantInfo.images.original.length > 0 
  ?  img = props.restaurantInfo.images.original 
  :  img = 'https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png'; 

  return (
    <div className="SingleRestaurant col-lg-4 col-md-6 col-sm-12">
      <p className="r-name">{name}</p>
      <p>Country: {country} <br/>
      City: {city}  <br/>
      Street: {street}</p>
      <img src={img} alt={name} />
      <p className="r-rating"><span>{rating}</span>/100</p>
    </div>
  );

}

export default SingleRestaurant;
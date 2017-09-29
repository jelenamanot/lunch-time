import React from 'react';

const Header = (props) => {
  return (
    <header>
      <div className="row">
        <div className="col-md-4">
          <h1>{props.heading}</h1>
        </div>
      </div>
      <div className="row col-md-4">
        <p>{props.subheading}</p>
      </div>
    </header>
  );
}

export default Header;
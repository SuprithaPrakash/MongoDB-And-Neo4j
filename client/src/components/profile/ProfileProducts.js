import React from "react";
import PropTypes from "prop-types";
//import Moment from "react-moment";

const ProfileProducts = ({
  products: { PName, Occassions, Store, Price, description },
}) => (
  <div>
    <h3 className='text-dark'>{PName}</h3>
    <p>
      <strong>Occassions: </strong> {Occassions}
    </p>
    <p>
      <strong>Store: </strong> {Store}
    </p>
    <p>
      <strong>Price: </strong> {Price}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProfileProducts;

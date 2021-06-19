import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileStores = ({
  stores: { SName, Occassions, Address, Phone, Email },
}) => (
  <div>
    <h3 className='text-dark'>{SName}</h3>
    <p>
      <strong>Occassions: </strong> {Occassions}
    </p>
    <p>
      <strong>Address: </strong> {Address}
    </p>
    <p>
      <strong>Phone: </strong> {Phone}
    </p>
    <p>
      <strong>Email: </strong> {Email}
    </p>
  </div>
);

ProfileStores.propTypes = {
  stores: PropTypes.array.isRequired,
};

export default ProfileStores;

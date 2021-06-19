import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    Occassions,
    user: { name },
  },
}) => (
  <div class='profile-about bg-light p-2'>
    <h2 class='text-primary'>Gifts offered for Occassions</h2>
    <div class='skills'>
      {Occassions.map((Occassion, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check'></i>
          {Occassion}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;

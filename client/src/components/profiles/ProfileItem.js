import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name },
    Store,
    location,
    Occassions,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <div>
        <h2>{name}</h2>
        {/* <p>
          {Store} {location && <span> at {location}</span>}
        </p> */}
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View & Buy
        </Link>
      </div>
      <ul>
        {Occassions.slice(0, 4).map((Occassion, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {Occassions}
          </li>
        ))}
      </ul>
    </div>
  );
};
ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;

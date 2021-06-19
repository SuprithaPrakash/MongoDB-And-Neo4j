import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    SName,
    City,
    website,
    user: { name },
  },
}) => {
  return (
    <div class='profile-top bg-primary p-2'>
      <h1 class='large'>{name}</h1>
      <p class='lead'>
        {SName} {SName && <span> at {SName}</span>}
      </p>
      <p>{City && <span>{City}</span>}</p>
      <div class='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i class='fas fa-globe fa-2x' />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;

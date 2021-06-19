import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    Store: "",
    location: "",
    website: "",
    Occassions: "",
  });
  useEffect(() => {
    getCurrentProfile();

    setFormData({
      Store: loading || !profile.Store ? "" : profile.Store,
      location: loading || !profile.location ? "" : profile.location,
      website: loading || !profile.website ? "" : profile.website,
      Occassions:
        loading || !profile.Occassions ? "" : profile.Occassions.join(","),
    });
  }, [loading, getCurrentProfile]);
  const { Store, website, location, Occassions } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Store Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Provide Information about your store
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <select
            name='location'
            value={location}
            onChange={(e) => onChange(e)}>
            <option value='0'>* Select your Store location</option>
            <option value='Mannheim'>Mannheim</option>
            <option value='Heidelberg'>Heidelberg</option>
            <option value='New York'>New York</option>
            <option value='Bengaluru'>Bengaluru</option>
            <option value='Mysore'>Mysore</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>Your Store Location</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Store'
            name='Store'
            value={Store}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Name of your store in the location
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Website'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Your store website if you have</small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Occassions'
            name='Occassions'
            value={Occassions}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values (eg. Birthday,Wedding,Anniversary)
          </small>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);

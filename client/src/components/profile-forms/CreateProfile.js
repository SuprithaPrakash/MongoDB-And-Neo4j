import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    Store: "",
    location: "",
    Occassions: "",
    website: "",
  });
  const { Store, location, Occassions, website } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
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
            <option value='0'>* Select your location Status</option>
            <option value='Mannheim'>Mannheim</option>
            <option value='Heidelberg'>Heidelberg</option>
            <option value='New York'>New York</option>
            <option value='Bengaluru'>Bengaluru</option>
            <option value='Mysore'>Mysore</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>Tell your store location</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Store Name'
            name='Store'
            value={Store}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Website'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Could be your own or a company website
          </small>
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

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));

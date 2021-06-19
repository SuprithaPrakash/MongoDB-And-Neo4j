import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStores } from "../../actions/profile";

const AddStores = ({ addStores, history }) => {
  const [formData, setFormData] = useState({
    SName: "",
    Occassions: "",
    Address: "",
    Phone: "",
    Email: "",
  });

  const { SName, Occassions, Address, Phone, Email } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <h1 class='large text-primary'>Add Your Stores</h1>
      <p class='lead'>
        <i class='fas fa-code-branch'></i> Add your Store
      </p>
      <form
        class='form'
        onSubmit={(e) => {
          e.preventDefault();
          addStores(formData, history);
        }}>
        <div class='form-group'>
          <input
            type='text'
            placeholder='* Store Name'
            name='SName'
            value={SName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <div class='form-group'>
          <input
            type='text'
            placeholder='Occassions'
            name='Occassions'
            value={Occassions}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <input
            type='text'
            placeholder='Enter your full store address'
            name='Address'
            value={Address}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class='form-group'>
          <input
            type='text'
            placeholder='Phone Number'
            name='Phone'
            value={Phone}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class='form-group'>
          <input
            type='text'
            placeholder='Email'
            name='Email'
            value={Email}
            onChange={(e) => onChange(e)}></input>
        </div>
        <input type='submit' class='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddStores.propTypes = {
  addStores: PropTypes.func.isRequired,
};

export default connect(null, { addStores })(withRouter(AddStores));

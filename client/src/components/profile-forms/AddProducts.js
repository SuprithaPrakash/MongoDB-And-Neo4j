import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProducts } from "../../actions/profile";

const AddProducts = ({ addProducts, history }) => {
  const [formData, setFormData] = useState({
    PName: "",
    Occassions: "",
    Store: "",
    Price: "",
    description: "",
  });

  const { PName, Occassions, Store, Price, description } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <h2 class='large text-primary'>Add a Product</h2>
      <p class='lead'>
        <i class='fas fa-code-branch'></i> Add your store products
      </p>
      <form
        class='form'
        onSubmit={(e) => {
          e.preventDefault();
          addProducts(formData, history);
        }}>
        <div class='form-group'>
          <input
            type='text'
            placeholder='*Product Name'
            name='PName'
            value={PName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class='form-group'>
          <input
            type='text'
            placeholder='*Occassions'
            name='Occassions'
            value={Occassions}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class='form-group'>
          <input
            type='text'
            placeholder='Enter your store where you are offering this product'
            name='Store'
            value={Store}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <input
            type='text'
            placeholder='Price'
            name='Price'
            value={Price}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Product Description'
            value={description}
            onChange={(e) => onChange(e)}></textarea>
        </div>
        <input type='submit' class='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddProducts.propTypes = {
  addProducts: PropTypes.func.isRequired,
};

export default connect(null, { addProducts })(withRouter(AddProducts));

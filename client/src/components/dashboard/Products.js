import React, { Fragment } from "react";
import PropTypes from "prop-types";
//import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteProducts } from "../../actions/profile";

const Products = ({ products, deleteProducts }) => {
  const product = products.map((prd) => (
    <tr key={prd._id}>
      <td>{prd.PName}</td>
      <td>{prd.Occassions}</td>
      <td>{prd.Store}</td>
      <td>{prd.Price}</td>
      <td>{prd.description}</td>
      <td>
        <button
          onClick={() => deleteProducts(prd._id)}
          className='btn btn-danger'>
          +Image
        </button>
      </td>

      <td>
        <button
          onClick={() => deleteProducts(prd._id)}
          className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Your Products</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Products</th>
            <th>Occassions</th>
            <th>Store</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{product}</tbody>
      </table>
    </Fragment>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  deleteProducts: PropTypes.func.isRequired,
};

export default connect(null, { deleteProducts })(Products);

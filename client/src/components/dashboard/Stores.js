import React, { Fragment } from "react";
import PropTypes from "prop-types";
//import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteStores } from "../../actions/profile";

const Stores = ({ stores, deleteStores }) => {
  const store = stores.map((str) => (
    <tr key={str._id}>
      <td>{str.SName}</td>
      <td>{str.Occassions}</td>
      <td>{str.Address}</td>
      <td>{str.Phone}</td>
      <td>{str.Email}</td>
      <td>
        <button
          onClick={() => deleteStores(str._id)}
          className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Your Store</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Store Name</th>
            <th>Occassions</th>
            <th className='hide-sm'>Address</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{store}</tbody>
      </table>
    </Fragment>
  );
};

Stores.propTypes = {
  stores: PropTypes.array.isRequired,
  deletestores: PropTypes.func.isRequired,
};

export default connect(null, { deleteStores })(Stores);

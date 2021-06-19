import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div class='dash-buttons'>
      <Link to='/edit-profile' class='btn btn-light'>
        <i class='fas fa-user-circle text-primary' /> Edit Store
      </Link>
      <Link to='/add-products' class='btn btn-light'>
        <i class='fab fa-black-tie text-primary' /> Add Products
      </Link>
      <Link to='/add-stores' class='btn btn-light'>
        <i class='fas fa-graduation-cap text-primary' /> Add Stores
      </Link>
    </div>
  );
};

export default DashboardActions;

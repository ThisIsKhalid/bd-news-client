import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
      <div>
        <h3>Here is our Terms & Conditions.</h3>
        <p>
          If you agrre with all of this condition then you can go back to{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>
    );
};

export default TermsAndConditions;
import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import Banner from "../component/Banner";

const Error = (props) => {
  return (
    <div>
      <Hero hero="errorHero">
        <Banner tittle="Error">
          <Link to="/" className="btn-general">Return</Link>
        </Banner>
      </Hero>
    </div>
  );
};

Error.propTypes = {};

export default Error;

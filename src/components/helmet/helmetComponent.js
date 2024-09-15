import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
const DEFAULT = `Movie Search`;
export const HelmetComponent = ({ title, description }) => {
  return (
    <Helmet>
      <title>{`${DEFAULT} | ${title}`}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

HelmetComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HelmetComponent;

import React from "react";
import PropTypes from "prop-types";
import "./loading.less";
import classNames from "classnames";

export const Loading = ({ children, loading = false }) => {
  return (
    <div className="o-loadingContainer">
      {loading ? (
        <div aria-label="loading" className="a-loading__symbol"></div>
      ) : (
        <></>
      )}
      <div className={classNames({ "m-loading__contentLoading": loading })}>
        {children}
      </div>
    </div>
  );
};

Loading.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
};

export default Loading;

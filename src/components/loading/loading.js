import React from "react";
import PropTypes from "prop-types";
import "./loading.less";
import classNames from "classnames";

export const Loading = ({ loading = false }) => {
  return (
    <div className="o-loadingContainer">
      {loading && (
        <>
          <div aria-label="loading" className="a-loading__symbol"></div>
          <div
            className={classNames({ "a-loading__contentLoading": loading })}
          ></div>
        </>
      )}
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

export default Loading;

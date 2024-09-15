import React from "react";
import PropTypes from "prop-types";
import "./message.less";
const DEFAULT = "Find your favorite movies by using the search field.";

export const Message = ({ message = DEFAULT }) => {
  return <p className="a-message">{message}</p>;
};

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;

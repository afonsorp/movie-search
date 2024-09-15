import React from "react";
import { Message } from "../message/message";
const DEFAULT =
  "Page not found. But hey, at least you found our 404 page! That's a win, right?";
export const NotFound = () => {
  return <Message message={DEFAULT} />;
};

export default NotFound;

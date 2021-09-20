import React from "react";
import { Portal } from "../../Portal/Portal";

export const ToastContainer = (props) => {
  console.log(props);
  return <Portal>{props.children}</Portal>;
};

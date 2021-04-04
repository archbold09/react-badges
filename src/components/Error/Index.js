import React from "react";

import "../styles/Error.css";

function Error(props) {
  return <div className="Error">{props.error.message}</div>;
}

export default Error;

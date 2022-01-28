import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show m-3`}
        role="alert"
        id="alert"
      >
        <strong>{props.alert.type}</strong>: {props.alert.msg}
      </div>
    )
  );
}

export default Alert;

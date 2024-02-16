import React from "react";
import Formulario from "./Formulario";

const Alert = (props) => {
  return <div>{{props.error} ? <p className="error">{props.msge}</p> : null}</div>;
};

export default Alert;

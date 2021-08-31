import React from "react";

const ErrorDeFormulario = (props) => {
  const { name, error = {} } = props;

  const { mensaje, hasFocused } = error;

  // const mensaje = props?.error?.mensaje;
  // const hasFocused = props?.error?.hasFocused;
  console.log(`%cError Props`, "font-size: 1.2rem; color: yellow;");
  console.log({ props, name, mensaje, hasFocused });
  return (
    <div className="form-error" name={name}>
      {hasFocused ? mensaje : ""}
    </div>
  );
};

export default ErrorDeFormulario;

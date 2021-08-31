import React, { useState } from "react";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [, setConfirmarContraseña] = useState("");

  const [errorDeContraseña, setErrorDeContraseña] = useState("");
  const [errorDeConfirmarContraseña, setErrorDeConfirmarContraseña] =
    useState("");

  const registrar = (e) => {
    e.preventDefault();
    if (!errorDeContraseña && !errorDeConfirmarContraseña) {
      console.log({ nombre, apellido });
      // sumbit a base de datos
    } else console.error("Hay algun error");
  };

  const onChangeContraseña = (e) => {
    const val = e.target.value;
    if (val.length < 8)
      setErrorDeContraseña("Contraseña tiene que ser más larga");
    else setErrorDeContraseña("");
    setContraseña(val);
  };

  const onChangeConfirmarContraseña = (e) => {
    const val = e.target.value;
    if (val !== contraseña)
      setErrorDeConfirmarContraseña("Contraseñas deben ser iguales");
    else setErrorDeConfirmarContraseña("");
    setConfirmarContraseña(val);
  };

  return (
    <form className="register-form" onSubmit={registrar}>
      <label htmlFor="nombre">Nombre</label>
      <input
        name="nombre"
        id="nombre"
        onChange={(e) => setNombre(e.target.value)}
      />
      <label htmlFor="apellido">Apellido</label>
      <input
        name="apellido"
        id="apellido"
        onChange={(e) => setApellido(e.target.value)}
      />
      <label htmlFor="correo">Correo</label>
      <input name="correo" type="email" id="correo" />
      <label htmlFor="contraseña">Contraseña</label>
      <input
        name="contraseña"
        type="password"
        id="contraseña"
        onChange={onChangeContraseña}
      />
      {errorDeContraseña ? (
        <div style={{ color: "red" }}>{errorDeContraseña}</div>
      ) : (
        ""
      )}
      <label htmlFor="confirmar-contraseña">Confirmar Contraseña</label>
      <input
        name="confirmar-contraseña"
        type="password"
        id="confirmar-contraseña"
        onChange={onChangeConfirmarContraseña}
      />
      {errorDeConfirmarContraseña ? (
        <div style={{ color: "red" }}>{errorDeConfirmarContraseña}</div>
      ) : (
        ""
      )}
      <input type="submit" value="Registrar" />
    </form>
  );
};

export default Register;

import React, { useState } from "react";
import ErrorDeFormulario from "./ErrorDeFormulario";

const Register = () => {
  const [formErrors, setFormErrors] = useState({
    nombre: {},
    apellido: {},
    correo: {},
    contraseña: {},
    confirmarContraseña: {},
  });

  const getFormData = (form) => {
    const formData = new FormData(form);

    const data = {};
    for (const [name, value] of formData.entries()) data[name] = value;

    return data;
  };

  const verificar = (inputs) => {
    const {
      nombre,
      apellido,
      correo,
      contraseña,
      "confirmar-contraseña": confirmarContraseña,
    } = inputs;

    const errors = formErrors;

    if (nombre.length < 2)
      errors.nombre.mensaje = "Nombre tiene que ser más largo";

    if (apellido.length < 2)
      errors.apellido.mensaje = "Apellido tiene que ser mejor";

    if (correo.length < 5)
      errors.correo.mensaje = "El correo necesita 5 letras";

    const correoValido =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        correo.toLowerCase()
      );

    if (!correoValido) errors.correo.mensaje = "El correo no está bien";

    if (contraseña.length < 8)
      errors.contraseña.mensaje = "La contraseña necesita 8 letras o más";

    if (contraseña !== confirmarContraseña)
      errors.confirmarContraseña.mensaje = "Las contraseñas deben ser iguales";

    setFormErrors(errors);
    const mensajesDeError = Object.keys(errors).filter((err) => err.mensaje);
    return !mensajesDeError.length;
  };

  const onChange = (e) => {
    const form = e.target.closest("form");
    const data = getFormData(form);
    verificar(data);
  };

  const registrar = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = getFormData(form);
    const isValido = verificar(data);
    console.log({ isValido });
    if (isValido) {
      console.log(`%cÈxito, po! 😃`, `font-size: 1.5rem; color: limegreen;`, {
        data,
      });
      form
        .querySelectorAll("input:not([type='submit'])")
        .forEach((input) => (input.value = ""));
      // form.remove();
    } else window.alert("Verifique el formulario bien");
  };

  const onFocus = (e) => {
    console.log({ formFocus: e });
    const input = e.target;
    const name = input.name;
    setFormErrors((errores) => {
      if (errores[name]) errores[name].hasFocused = true;
      return errores;
    });
    console.log({ formErrors });
  };

  return (
    <form
      className="register-form"
      onSubmit={registrar}
      onChange={onChange}
      onFocus={onFocus}
    >
      <label htmlFor="nombre">Nombre</label>
      <input name="nombre" id="nombre" />
      <ErrorDeFormulario error={formErrors.nombre} name="nombre" />
      <label htmlFor="apellido">Apellido</label>
      <input name="apellido" id="apellido" />
      <ErrorDeFormulario error={formErrors.apellido} name="apellido" />
      <label htmlFor="correo">Correo</label>
      <input name="correo" type="email" id="correo" />
      <ErrorDeFormulario error={formErrors.correo} name="correo" />
      <label htmlFor="contraseña">Contraseña</label>
      <input name="contraseña" type="password" id="contraseña" />
      <ErrorDeFormulario error={formErrors.contraseña} name="contraseña" />
      <label htmlFor="confirmar-contraseña">Confirmar Contraseña</label>
      <input
        name="confirmar-contraseña"
        type="password"
        id="confirmar-contraseña"
      />
      <ErrorDeFormulario
        mensaje={formErrors.confirmarContraseña}
        name="confirmar-contraseña"
      />
      <input type="submit" value="Registrar" />
    </form>
  );
};

export default Register;

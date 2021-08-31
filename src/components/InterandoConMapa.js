import React from "react";

const InterandoConMapa = (props) => {
  const { arreglo } = props;

  const lista = arreglo.map((val, key) => <li key={key}>{val}</li>);

  return <ul>{lista}</ul>;
};

export default InterandoConMapa;

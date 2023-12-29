import React from "react";
import * as C from "./styles";

const ButtonTable = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
};

export default ButtonTable;
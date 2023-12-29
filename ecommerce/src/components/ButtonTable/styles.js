// Button.js
import styled, { css } from "styled-components";

const getColorBasedOnText = (text) => {
  const lowerCaseText = text.toLowerCase();
  
  if (lowerCaseText === "Visualizar") {
    return "#2196F3"; // Azul
  } else if (lowerCaseText === "Remover") {
    return "#FF0000"; // Vermelho
  } else {
    return "#046ee5"; // Cor padrão
  }
};

export const Button = styled.button`
  padding: 8px 12px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-weight: 600;
  font-size: 10px;
  margin-right: 5px;

  ${({ Text }) => css`
    background-color: ${getColorBasedOnText(Text)};
  `}
`;

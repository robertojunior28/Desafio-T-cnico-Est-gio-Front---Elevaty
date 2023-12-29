// styles.js
import styled from 'styled-components';

// Estilo para a div que envolve o modal
export const ModalOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 1;
  text-align: center;
  margin-left: 25%;
  
`;

// Estilo para o conteúdo do modal
export const ModalContent = styled.div`
  
  background: white;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.160);
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  color: black;
  
`;

// Estilo para o botão de fechar do modal
export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 30px;
`;
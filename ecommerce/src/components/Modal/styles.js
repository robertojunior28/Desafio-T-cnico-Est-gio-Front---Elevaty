import styled from 'styled-components';

export const ModalOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 105%;
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 1;
  text-align: center;
  margin-left: 25%;
  
`;

export const ModalContent = styled.div`
  
  background: #E8F1F3;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.160);
  border: 2px solid #14293D;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  color: black;
  
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 2px;
  right: 10px;
  cursor: pointer;
  font-size: 40px;
  &:hover {
    color: red;
}
`;
import styled from 'styled-components';

export const PaginationButtonsWrapper = styled.div`
  
  margin: 80px;
  display: flex;
  justify-content: center;
  z-index: 1; /* Adicione z-index para garantir que fique acima da tabela */
`;

export const PaginationButton = styled.button`
  margin: 5px;
  align-items: center;
  background-color: #046ee5;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #034b8c;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const CurrentPageSpan = styled.span`
  align-items: center;
`;
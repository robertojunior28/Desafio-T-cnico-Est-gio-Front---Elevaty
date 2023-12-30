import styled from 'styled-components';

export const PaginationButtonsWrapper = styled.div`
  margin: 80px;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const PaginationButton = styled.button`
  margin: 5px;
  align-items: center;
  background-color: #247BA0;
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

export const ModalContentWrapper = styled.div`
  
`;

export const ProductImage = styled.img`
  margin: 15px;
  max-width: 450px;
  height: auto;
`;

export const ProductTitle = styled.h2`
  margin:10px;
  font-size: 24px;
`;

export const ProductInfo = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ProductDescriptionTitle = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  max-width: 470px;
  font-size: 16px;
  margin-bottom: 20px;
  
`;
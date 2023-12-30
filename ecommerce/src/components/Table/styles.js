import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border-right: 1px solid #ddd;
  text-align: left;
`;

export const TableHeadCell = styled.th`
  padding: 12px;
  border-right: 1px solid #ddd;
  text-align: left;
  background-color: #f2f2f2;
`;

export const TableWrapper = styled.div`
  background-color: #247BA0;
  padding: 2px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  margin: -25px auto;
  position: relative;
  top: 50px;
  bottom: 50px;
  
`;

export const StyledButton = styled.button`
  margin-right: 5px;
  border: 1px solid #ccc;
  background-color: #247BA0;
  color: white;
  font-weight: 600;
  font-size: 12px;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #034b8c;
  }
`;

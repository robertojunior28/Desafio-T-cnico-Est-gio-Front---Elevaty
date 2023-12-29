import styled from 'styled-components';

export const TableWrapper = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

export const StyledTable = styled.table`
  width: 80%; /* ou qualquer largura desejada */
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
  border: 1px solid #dddddd;
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #dddddd;
`;

export const DeleteButton = styled.button`
  background-color: #e57373;
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f44336;
  }
`;

export const CancelButton = styled.button`
  background-color: #81c784;
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4caf50;
  }
`;

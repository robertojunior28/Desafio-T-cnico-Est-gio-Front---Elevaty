import React from 'react';
import {
  TableContainer,
  TableRow,
  TableCell,
  TableHeadCell,
  TableWrapper,
  StyledButton,
} from './styles';

const Table = (props) => {
  const rows = Array.isArray(props.products)
    ? props.products.map((product) => {
        return (
          <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.taxes}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              <StyledButton onClick={() => props.view(product.id)}>
                Vizualizar
              </StyledButton>
              <StyledButton onClick={() => props.deleteProduct(product.id)}>
                Remover
              </StyledButton>
            </TableCell>
          </TableRow>
        );
      })
    : null;

  return (
    <TableWrapper>
      <TableContainer>
        <thead>
          <tr>
            <TableHeadCell scope="col">Id</TableHeadCell>
            <TableHeadCell scope="col">Nome</TableHeadCell>
            <TableHeadCell scope="col">Taxa</TableHeadCell>
            <TableHeadCell scope="col">Preço</TableHeadCell>
            <TableHeadCell scope="col"></TableHeadCell>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </TableContainer>
    </TableWrapper>
  );
};

export default Table;


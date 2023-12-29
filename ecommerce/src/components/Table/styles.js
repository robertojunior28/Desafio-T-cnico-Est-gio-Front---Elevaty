// styles.js
import styled from 'styled-components';

// Estilo para a tabela
export const TableContainer = styled.table`
  width: 100%; // 100% de largura
  border-collapse: collapse; // Remove espaçamento entre as células
  background-color: #fff; // Fundo branco
  border: 1px solid #000; // Adiciona uma borda à volta da tabela
`;

// Estilo para a linha da tabela
export const TableRow = styled.tr`
  border-bottom: 1px solid #000; // Linha preta entre as linhas
`;

// Estilo para a célula da tabela
export const TableCell = styled.td`
  padding: 10px; // Preenchimento de 10 pixels
  border-right: 1px solid #000; // Adiciona uma borda direita entre as colunas
`;

// Estilo para a célula do cabeçalho da tabela
export const TableHeadCell = styled.th`
  padding: 10px; // Preenchimento de 10 pixels
  border-right: 1px solid #000; // Adiciona uma borda direita entre as colunas
`;

// Estilo para a div que envolve a tabela e os botões
export const TableWrapper = styled.div`
  background-color: #f0f0f0; // Fundo cinza claro
  padding: 10px; // Preenchimento de 10 pixels
  border-radius: 5px; // Borda arredondada
  display: flex; // Exibição de elemento flexível
  align-items: center; // Centraliza verticalmente
  justify-content: center; // Centraliza horizontalmente
  max-width: 50%; // Largura máxima de 50%
  margin: 50px auto 50px ; // Adiciona margem automática à esquerda, à direita e na parte inferior para centralizar e posicionar abaixo
  position: relative; // Define a posição relativa
  top: 50px; // Ajusta a posição para baixo
`;

// Estilo para o botão
export const StyledButton = styled.button`
  margin-right: 5px; // Margem à direita de 5 pixels
  border: 1px solid #ccc; // Borda cinza
  background-color: #046ee5; // Fundo azul
  color: white; // Texto branco
  font-weight: 600; // Peso da fonte 600
  font-size: 10px; // Tamanho da fonte de 10 pixels
  padding: 8px 12px; // Preenchimento de 8 pixels superior/inferior e 12 pixels à esquerda/direita
  outline: none; // Remove a borda ao redor do botão ao ser clicado
  cursor: pointer; // Cursor do mouse tipo ponteiro
  border-radius: 5px; // Borda arredondada
`;
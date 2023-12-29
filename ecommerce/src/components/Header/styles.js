import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: blue;
    padding: 20px;
    color: white;
    font-size: 35px;
    font-family: 'Pacifico', cursive;
`;

export const Logo = styled.div`
    flex-grow: 1;
    text-align: center;
`;

export const LogoutButton = styled.button`
    font-size: 18px;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: 'Pacifico', cursive;
    margin-right: 20px; /* Adicione um espaçamento na parte superior */
`;
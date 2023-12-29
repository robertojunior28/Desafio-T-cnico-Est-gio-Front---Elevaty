import React, { useContext } from "react";
import styled from 'styled-components';
import { Container, Logo, LogoutButton } from "./styles";
import { AuthContext } from "../../contexts/auth";

const Header = () => {
    const { signout } = useContext(AuthContext);

    const handleSignout = () => {
        // Chame a função de signout quando o botão for clicado
        signout();
    };

    return (
        <Container>
            <Logo>Loja</Logo>
            <LogoutButton onClick={handleSignout}>Sair</LogoutButton>
        </Container>
    );
}

export default Header;
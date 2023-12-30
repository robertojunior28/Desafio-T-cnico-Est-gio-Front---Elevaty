import React, { useContext } from "react";
import { Container, Logo, LogoutButton } from "./styles";
import { AuthContext } from "../../contexts/auth";

const Header = () => {
    const { signout } = useContext(AuthContext);

    const handleSignout = () => {
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
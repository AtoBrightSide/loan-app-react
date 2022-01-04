import { StyledHeader, Nav } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import styled from 'styled-components';

const MyHeader = styled.h1`
    color: ${props => props.theme.titleColor};
`

export default function Header() {
    return (
        <StyledHeader>
            <Nav>
                <MyHeader>Loan App</MyHeader>
                <Button>LOGIN</Button>
            </Nav>
        </StyledHeader>
    )
}

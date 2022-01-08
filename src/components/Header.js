import { StyledHeader, Nav } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import styled from 'styled-components';

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%50%;
  border: none;
  background: ${props => props.theme.buttonColor};
  color: ${props => props.theme.buttonTextColor};
  &::focus {
      outline: none;
  }
  transition: all .5s ease;  
`;

const MyHeader = styled.h1`
    color: ${props => props.theme.titleColor};
`;

export default function Header(props) {

    function changeTheme() {
        console.log(props.theme);
        if (props.theme === "light")
            props.setTheme("dark");
        else
            props.setTheme("light");
    }

    const icon = props.theme === "dark" ? <span class="material-icons">wb_sunny </span> : <span class="material-icons">nightlight</span>

    return (
        <StyledHeader>
            <Nav>
                <MyHeader>Loan App</MyHeader>
                <Toggle onClick={changeTheme}>
                    {icon}
                </Toggle>
            </Nav>
        </StyledHeader>
    )
}

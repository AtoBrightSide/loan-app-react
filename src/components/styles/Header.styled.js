import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    align-items: center;
`

export const Nav = styled.nav`
    background-color: ${props => props.theme.navBar};
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
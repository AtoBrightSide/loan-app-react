import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    align-items: center;
    transition: all 1s ease;
`

export const Nav = styled.nav`
    background: ${props => props.theme.navBar};
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 1s ease;
`
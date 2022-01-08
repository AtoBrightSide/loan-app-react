import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  padding: 1px;
  align-items: center;
  background: ${props => props.theme.bodyColor};
  transition: all 1s ease;
`
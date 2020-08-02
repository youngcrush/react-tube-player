import styled from "styled-components"

export const StyledVideo = styled.section`
  position: relative;
  background-color: ${props => props.theme.bgcolor};
  transition: all 1.62s ease;
  @media screen and (max-width: 1400px) {
    width:100%;
  }
`

export const StyledVideoWrapper = styled.div`
  width: 100%;
`
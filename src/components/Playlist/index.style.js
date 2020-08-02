import styled from "styled-components"

const StyledWrapper = styled.section`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 530px;
  flex: 1 1 530px;
  overflow: hidden;
  color: white;
  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`

export default StyledWrapper
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: ${props => props.theme.blue};
  font-family: ${props => props.theme.poppins};
  font-style: normal;
  font-weight: bold;
  font-size: 2.5em;
  margin-bottom: 1.11em;
  text-align: center;
`;

const Title = props => <StyledH2 {...props}>{props.children}</StyledH2>;

export default Title;

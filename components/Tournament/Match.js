import styled from "styled-components";
import Player from "./Player";

const StyledDiv = styled.div`
  border: 1px solid ${props => props.theme.blue};
  border-radius: 2px;
  width: 265px;
  & > div:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.blue};
  }
  &:not(:first-child) {
    margin-top: 25px;
  }
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const Match = ({ playerA, playerB = null, color = false, ...props }) => (
  <StyledDiv style={{ borderColor: color }}>
    <Player {...playerA} color={color} />
    <Player {...playerB} color={color} />
  </StyledDiv>
);

export default Match;

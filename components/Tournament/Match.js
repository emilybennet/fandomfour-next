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
  <StyledDiv data-matchid={props.id} style={{ borderColor: color }}>
    <Player {...playerA} color={color} toggleModal={props.toggleModal} />
    <Player {...playerB} color={color} toggleModal={props.toggleModal} />
  </StyledDiv>
);

export default Match;
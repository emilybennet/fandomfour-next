import styled from "styled-components";
import Player from "./Player";

const StyledDiv = styled.div`
  border: 1px solid ${props => props.theme.blue};
  border-radius: 2px;
  position: relative;
  width: 265px;
  & > div:not(:last-of-type) {
    border-bottom: 1px solid ${props => props.theme.blue};
  }
  &:not(:first-child) {
    margin-top: 25px;
  }
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const MetaLink = styled.span`
  color: #878383;
  cursor: pointer;
  font-size: 0.6em;
  margin-top: 5px;
  position: absolute;
  right: 0;
`;

const Match = ({
  playerA,
  playerB = null,
  color = false,
  meta = false,
  results = { playerA: 0, playerB: 0 },
  ...props
}) => (
  <StyledDiv data-matchid={props.id} style={{ borderColor: color }}>
    <Player
      {...playerA}
      color={color}
      toggleModal={props.toggleModal}
      matchWinner={results.playerA > results.playerB}
    />
    <Player
      {...playerB}
      color={color}
      toggleModal={props.toggleModal}
      matchWinner={results.playerA < results.playerB}
    />
    {meta && (
      <MetaLink onClick={() => props.switchTab(meta.changeToTab)}>
        {meta.text}
      </MetaLink>
    )}
  </StyledDiv>
);

export default Match;

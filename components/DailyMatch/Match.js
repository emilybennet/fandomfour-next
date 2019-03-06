import styled from "styled-components";
import Button from "../Button";

const Container = styled.section`
  text-align: center;
  max-width: 385px;
  width: 100%;
  &:first-of-type {
    .player:first-of-type .player-nameplate,
    .player:first-of-type .player-name {
      transform: rotate(4deg);
    }
    .player:last-of-type .player-nameplate,
    .player:last-of-type .player-name {
      transform: rotate(-4deg);
    }
  }
  &:last-of-type {
    .player:first-of-type .player-nameplate,
    .player:first-of-type .player-name {
      transform: rotate(-4deg);
    }
    .player:last-of-type .player-nameplate,
    .player:last-of-type .player-name {
      transform: rotate(4deg);
    }
  }
`;

const Versus = styled.span`
  color: ${props => props.theme.white};
  display: block;
  font-family: ${props => props.theme.poppins};
  font-size: 1.66em;
  font-style: italic;
  font-weight: 900;
  letter-spacing: 0.15em;
  margin: 20px 0;
  text-transform: uppercase;
`;

const PlayerContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 110px;
  justify-content: center;
  max-width: 385px;
  width: 100%;
`;

const PlayerName = styled.div`
  color: ${props => props.theme.yellow};
  font-family: ${props => props.theme.poppins};
  font-size: 1.66em;
  font-weight: 600;
  grid-row-start: 1;
  grid-row-end: auto;
  grid-column-start: 1;
  grid-column-end: auto;
  position: relative;
  z-index: 10;
`;

const PlayerNameplate = styled.div`
  align-self: stretch;
  background: ${props => props.theme.white};
  grid-column-start: 1;
  grid-column-end: auto;
  grid-row-start: 1;
  grid-row-end: auto;
  mix-blend-mode: overlay;
  position: relative;
  opacity: 0.5;
  width: 100%;
  z-index: 5;
`;

const MatchActions = styled.footer`
  margin-top: 70px;
`;

const Player = ({ player, rotate = 0, ...props }) => (
  <PlayerContainer
    className="player"
    onClick={() => props.toggleModal(player.id)}
  >
    <PlayerNameplate className="player-nameplate" />
    <PlayerName className="player-name">{player.name}</PlayerName>
  </PlayerContainer>
);

const VoteBtn = ({ voteUrl = null, voteTime = null, ...props }) => {
  if (voteUrl)
    return (
      <Button
        text="Vote Now"
        url={voteUrl}
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      />
    );
  return (
    <Button text={`Voting Opens @ ${voteTime || "???"}`} disabled={true} />
  );
};

const Match = ({
  playerA,
  playerB,
  url = false,
  voteUrl = null,
  voteTime = null,
  toggleModal,
  ...props
}) => (
  <Container>
    <Player player={playerA} rotate={4} toggleModal={toggleModal} />
    <Versus>Versus</Versus>
    <Player player={playerB} rotate={-4} toggleModal={toggleModal} />
    <MatchActions>
      <VoteBtn voteUrl={voteUrl} voteTime={voteTime} />
    </MatchActions>
  </Container>
);

export default Match;

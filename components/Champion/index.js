import styled, { keyframes } from "styled-components";
import Burst from "./Brust";
import Title from "../Title";

import players from "../../data/players";

const Container = styled.section`
  align-content: center;
  align-items: center;
  background: url("/static/karen-pattern.webp") repeat,
    radial-gradient(60vw at 50% 56.73%, #4fb0aa 0%, #334d90 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4vw));
  display: grid;
  font-size: 1.5em;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  max-height: 30em;
  overflow: hidden;
  position: relative;
  text-align: center;
  z-index: 400;
  .no-webp & {
    background: url("/static/karen-pattern.png") repeat,
      radial-gradient(60vw at 50% 56.73%, #4fb0aa 0%, #334d90 100%);
  }
  svg {
    grid-column: 1 / auto;
    grid-row: 1 / auto;
    height: 36em;
    mix-blend-mode: overlay;
    opacity: 0.2;
  }
  polygon {
    fill: white;
  }
`;

const WinnerIntel = styled.div`
  cursor: pointer;
  grid-column: 1 / auto;
  grid-row: 1 / auto;
  transform: rotate(2deg);
`;

const WinnerName = styled.span`
  color: ${props => props.theme.white};
  display: block;
  font-size: 3em;
  font-style: italic;
  font-weight: 600;
`;

const YellowText = styled.span`
  color: ${props => props.theme.yellow};
  display: block;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const Champion = props => {
  const player = players[props.id];
  return (
    <Container>
      {/* <TitleYellow>
        Which is the best <em>MLP:FiM</em> episode?
      </TitleYellow> */}
      <Burst />
      <WinnerIntel onClick={() => props.toggleModal(player.id)}>
        <WinnerName>{player.name}</WinnerName>
        <YellowText>2019 Grand Champion</YellowText>
      </WinnerIntel>
    </Container>
  );
};

export default Champion;

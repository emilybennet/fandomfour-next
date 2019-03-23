import styled from "styled-components";
import Match from "./Match";
import Title from "../Title";

import players from "../../data/players";
import dailyMatch from "../../data/daily_match";

const Container = styled.section`
  background: url("/static/karen-pattern.webp") repeat,
    radial-gradient(60vw at 50% 56.73%, #4fb0aa 0%, #334d90 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4vw));
  overflow: hidden;
  padding: 200px 15px;
  position: relative;
  z-index: 400;
  .no-webp & {
    background: url("/static/karen-pattern.png") repeat,
      radial-gradient(50vw at 50% 56.73%, #4fb0aa 0%, #334d90 100%);
  }
`;

const Matches = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 973px) {
    flex-direction: column;
  }
`;

const Divider = styled.div`
  align-self: stretch;
  background: ${props => props.theme.yellow};
  margin: 0 100px;
  width: 3px;
  @media (max-width: 973px) {
    height: 3px;
    margin: 100px auto;
    width: 80%;
  }
`;

const TitleYellow = styled(Title)`
  color: ${props => props.theme.yellow};
`;

const DailyMatch = props => {
  return (
    <Container>
      {/* <TitleYellow>Today&rsquo;s Matches</TitleYellow> */}
      <TitleYellow>Monday&rsquo;s Matches</TitleYellow>
      <Matches>
        <Match
          {...dailyMatch[0]}
          playerA={players[dailyMatch[0].playerA]}
          playerB={players[dailyMatch[0].playerB]}
          toggleModal={props.toggleModal}
        />
        <Divider />
        <Match
          {...dailyMatch[1]}
          playerA={players[dailyMatch[1].playerA]}
          playerB={players[dailyMatch[1].playerB]}
          toggleModal={props.toggleModal}
        />
      </Matches>
    </Container>
  );
};

export default DailyMatch;

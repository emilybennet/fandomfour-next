import styled from "styled-components";
import Match from "./Match";

import players from "../../data/players";

const Container = styled.div`
  display: grid;
  grid-template-columns: 265px 10px 265px 10px 265px;
  grid-gap: 20px;
  justify-content: center;
  overflow-x: scroll;
  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

const ContainerTwoRounds = styled(Container)`
  grid-template-columns: 265px 10px 265px;
`;

const BraceColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Brace = styled.div`
  border-top: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  height: calc(57px + 50px);
  width: 9px;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const BraceLevel1 = styled(Brace)`
  height: calc(57px + 50px);
`;

const BraceLevel2 = styled(Brace)`
  height: calc(57px + 155px);
`;

const RoundColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Round = ({ matches, color, ...props }) => {
  let unknownId = 0;
  return (
    <RoundColumn>
      {matches.map(m => (
        <Match
          playerA={players[m.playerA]}
          playerB={players[m.playerB]}
          color={color}
          key={m.id}
          id={m.id}
          meta={m.meta}
          results={m.results}
          toggleModal={props.toggleModal}
          switchTab={props.switchTab}
        />
      ))}
    </RoundColumn>
  );
};

const TwoRounds = ({ round1, round2, round3, color = null, ...props }) => (
  <ContainerTwoRounds>
    <Round
      matches={round1}
      color={color}
      toggleModal={props.toggleModal}
      switchTab={props.switchTab}
    />
    <BraceColumn>
      <BraceLevel1 style={{ borderColor: color }} />
    </BraceColumn>
    <Round
      matches={round2}
      color={color}
      toggleModal={props.toggleModal}
      switchTab={props.switchTab}
    />
  </ContainerTwoRounds>
);

const ThreeRounds = ({ round1, round2, round3, color = null, ...props }) => (
  <Container>
    <Round
      matches={round1}
      color={color}
      toggleModal={props.toggleModal}
      switchTab={props.switchTab}
    />
    <BraceColumn>
      <BraceLevel1 style={{ borderColor: color }} />
      <BraceLevel1 style={{ borderColor: color }} />
    </BraceColumn>
    <Round
      matches={round2}
      color={color}
      toggleModal={props.toggleModal}
      switchTab={props.switchTab}
    />
    <BraceColumn>
      <BraceLevel2 style={{ borderColor: color }} />
    </BraceColumn>
    <Round
      matches={round3}
      color={color}
      toggleModal={props.toggleModal}
      switchTab={props.switchTab}
    />
  </Container>
);

const Bracket = props => {
  if (props.round3) return <ThreeRounds {...props} />;
  return <TwoRounds {...props} />;
};

export default Bracket;

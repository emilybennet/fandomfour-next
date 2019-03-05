import styled from "styled-components";
import EpisodeId from "./EpisodeId";

const StyledDiv = styled.div`
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.poppins};
  font-size: 10px;
  line-height: 0.8em;
  padding: 4px;
  width: 100%;
`;

const Player = ({ name, id, color, loser = false, ...props }) => {
  const dividerColor = color;
  if (loser || id === "???") {
    color = "#E5E5E5";
  }
  return (
    <StyledDiv style={{ borderColor: dividerColor }}>
      <EpisodeId id={id} color={color} />
      {name}
    </StyledDiv>
  );
};

export default Player;

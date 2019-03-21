import styled from "styled-components";
import EpisodeId from "../EpisodeId";

const StyledDiv = styled.div`
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.poppins};
  font-size: 10px;
  line-height: 0.8em;
  padding: 4px;
  width: 100%;
`;

const Player = ({
  name,
  id,
  color,
  eliminated = false,
  matchWinner = false,
  ...props
}) => {
  let styles = {
    borderColor: color
  };
  if ((eliminated && !matchWinner) || id === "???") {
    color = "#E5E5E5";
    styles.color = "#CCCCCC";
    styles.textDecoration = "line-through";
  }
  styles.cursor = id !== "???" ? "pointer" : "default";
  return (
    <StyledDiv
      onClick={() => {
        if (id !== "???") {
          props.toggleModal(id);
        }
      }}
      style={styles}
    >
      <EpisodeId id={id} color={color} />
      {name}
    </StyledDiv>
  );
};

export default Player;

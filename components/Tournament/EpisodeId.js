import styled from "styled-components";

const StyledSpan = styled.span`
  background: ${props => props.theme.blue};
  border-radius: 0.2em;
  color: ${props => props.theme.white};
  display: inline-block;
  font-family: ${props => props.theme.plex};
  font-size: 1em;
  font-weight: bold;
  line-height: 1;
  margin-right: 0.55em;
  min-width: 40px;
  padding: 0.5em 0.7em 0.4em 0.8em;
  text-align: center;
`;

const EpisodeId = ({ id, color }) => (
  <StyledSpan style={{ background: color }}>{id}</StyledSpan>
);

export default EpisodeId;

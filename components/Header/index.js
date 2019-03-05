import styled from "styled-components";

const Container = styled.header`
  align-items: center;
  background: url("/static/mosaic-header.webp") ${props => props.theme.black}
    center center;
  background-size: contain;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4vw));
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: -80px;
  padding: 200px 15px;
  position: relative;
  text-align: center;
  z-index: 500;
  .no-webp & {
    background: url("/static/mosaic-header.jpg") ${props => props.theme.black}
      center center;
    background-size: contain;
  }
`;

const Picture = styled.picture`
  max-width: 200px;
  margin-bottom: 4em;
`;

const Tagline = styled.p`
  font-family: ${props => props.theme.poppins};
  font-size: 1.6em;
  font-weight: 900;
  letter-spacing: 0.1em;
  max-width: 700px;
  text-transform: uppercase;
  a {
    color: ${props => props.theme.yellow};
    text-decoration: none;
  }
`;

const Header = props => (
  <Container>
    <Picture>
      <source type="image/webp" srcSet="/static/fandomfour-logo.webp" />
      <img src="/static/fandomfour-logo.png" alt="Fandom Four" />
    </Picture>
    <Tagline>
      Vote on{" "}
      <a href="https://twitter.com/bronycon" target="_blank">
        Twitter
      </a>{" "}
      to decide the best <em>Friendship is Magic</em> episodes.
    </Tagline>
  </Container>
);

export default Header;

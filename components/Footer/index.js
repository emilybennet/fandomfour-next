import styled from "styled-components";

const Container = styled.header`
  align-items: center;
  background: url("/static/mosaic-header.webp") ${props => props.theme.black}
    center center;
  background-size: contain;
  clip-path: polygon(0 0, 100% calc(0% + 4vw), 100% 100%, 0 100%);
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 15px 50px;
  position: relative;
  text-align: center;
  z-index: 500;
  .no-webp & {
    background: url("/static/mosaic-header.jpg") ${props => props.theme.black}
      center center;
    background-size: contain;
  }
  p {
    font-size: 0.6em;
    margin: 0 auto;
    max-width: 600px;
  }
`;

const Header = props => (
  <Container>
    <p>
      © 2019 BronyCon. BronyCon and BronyPalooza are a registered trademark of
      Lunar Solis Corp. My Little Pony: Friendship is Magic and related media
      belong exclusively to Hasbro, Inc. and Studio B/DHX Media Ltd.
    </p>
  </Container>
);

export default Header;

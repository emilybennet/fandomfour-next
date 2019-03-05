import styled from "styled-components";
import VideoBg from "./VideoBg";

const Container = styled.div`
  align-items: stretch;
  display: grid;
  grid-template-columns: 1fr 80vh 1fr;
  grid-template-rows: 1fr 80vh 1fr;
  height: 100vh;
  justify-content: center;
  width: 100vw;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const OrangeBlock = styled.div`
  background: #f68b23;
  grid-column: 2;
  grid-row: 2;
  mix-blend-mode: multiply;
  z-index: 10;
  @media (max-width: 500px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 2;
  grid-row: 2;
  justify-content: center;
  z-index: 20;
  @media (max-width: 500px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const BasicLayout = props => (
  <Container>
    <VideoBg />
    <OrangeBlock />
    <Content>{props.children}</Content>
  </Container>
);

export default BasicLayout;

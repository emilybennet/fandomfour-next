import styled from "styled-components";
import EpisodeId from "../EpisodeId";
import Button from "../Button";

import players from "../../data/players";

const Container = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  display: none;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
`;

const ModalBox = styled.section`
  background: ${props => props.theme.black};
  border-radius: 3px;
  color: ${props => props.theme.white};
  max-height: 760px;
  max-width: 900px;
  overflow-y: scroll;
  position: relative;
  width: 900px;
  @media (max-height: 850px) {
    max-height: 100vh;
    height: 100vh;
  }
`;

const Header = styled.header`
  align-items: flex-end;
  border-radius: 3px 3px 0px 0px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  flex-direction: column;
  justify-content: flex-end;
  height: 275px;
  overflow: hidden;
  width: 100%;
  picture,
  h2,
  > div {
    grid-column-start: 1;
    grid-row-start: 1;
    width: 100%;
  }
  picture,
  > div {
    height: 275px;
  }
  picture {
    display: flex;
    align-items: center;
  }
`;

const HeaderGradient = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 91.71%);
`;

const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px;
  & > a {
    margin: 0 20px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    & > a {
      margin: 0 0 20px;
    }
  }
`;

const WatchButton = styled(Button)`
  padding: 0 20px;
`;

const Name = styled.h2`
  align-content: flex-end;
  color: ${props => props.theme.white};
  display: flex;
  font-family: ${props => props.theme.poppins};
  font-size: 1.66em;
  font-weight: 900;
  height: auto;
  padding: 0 50px;
`;

const Synopsis = styled.p`
  font-family ${props => props.theme.poppins};
  font-size: 1.11em;
  line-height: 1.8;
  margin: 20px 50px 40px;
`;

const Metrics = styled.div`
  display: grid;
  color: ${props => props.theme.white};
  font-size: 0.83em;
  grid-template-columns: 120px 1fr;
  grid-gap: 20px 0;
  margin: 0 50px;
`;

const MetricLabel = styled.label`
  color: ${props => props.theme.yellow};
`;

const Metric = ({ label, value }) => (
  <React.Fragment>
    <MetricLabel>{label}</MetricLabel>
    <span>{value}</span>
  </React.Fragment>
);

const CloseShape = styled.a`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 30px;
  justify-items: center;
  position: absolute;
  right: 5px;
  top: 5px;
  transition: background 0.15s;
  width: 30px;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
  div {
    background: ${props => props.theme.white};
    grid-column-start: 1;
    grid-row-start: 1;
    height: 1px;
    width: 21px;
    &:first-child {
      transform: rotate(45deg);
    }
    &:last-child {
      transform: rotate(-45deg);
    }
  }
`;

const CloseBtn = ({ action }) => (
  <CloseShape onClick={() => action()}>
    <div />
    <div />
  </CloseShape>
);

const Modal = ({ showModal, toggleModal, contentId, ...props }) => {
  const show = showModal ? "flex" : "none";
  const p = players[contentId]
    ? players[contentId]
    : {
        id: null,
        name: null,
        season: 0,
        episode: 0,
        director: null,
        writer: null,
        released: null,
        watchNetflix: null,
        watchYouTube: null,
        synopsis: null
      };
  return (
    <Container style={{ display: show }}>
      <ModalBox>
        <CloseBtn action={toggleModal} />
        <Header>
          <picture>
            <source type="image/webp" srcSet={`/static/thumbs/${p.id}.webp`} />
            <img src={`/static/thumbs/${p.id}.jpg`} />
          </picture>
          <HeaderGradient />
          <Name>
            <EpisodeId id={p.id} />
            {p.name}
          </Name>
        </Header>
        <Synopsis>{p.synopsis}</Synopsis>
        <Metrics>
          <Metric label="Season" value={p.season} />
          <Metric label="Episode" value={p.episode} />
          <Metric label="Directed By" value={p.director} />
          <Metric label="Written By" value={p.writer} />
          <Metric label="Released" value={p.released} />
        </Metrics>
        <Footer>
          <Button text="Watch on Netflix" url={p.watchNetflix} />
          <Button text="Watch on YouTube" url={p.watchYouTube} />
        </Footer>
      </ModalBox>
    </Container>
  );
};

export default Modal;

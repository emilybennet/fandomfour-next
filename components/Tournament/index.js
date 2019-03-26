import styled from "styled-components";
import Title from "../Title";
import TabBar from "./TabBar";
import Bracket from "./Bracket";

// conferences
import Sun from "../../data/conference_sun";
import Moon from "../../data/conference_moon";
import Stars from "../../data/conference_stars";
import Chaos from "../../data/conference_chaos";
import Finals from "../../data/conference_finals";

const CONFERENCE_TABS = [
  {
    text: "Sun",
    color: "#F0641E"
  },
  {
    text: "Moon",
    color: "#5A3791"
  },
  {
    text: "Stars",
    color: "#FFC30F"
  },
  {
    text: "Chaos",
    color: "#87C88C"
  },
  {
    text: "Finals"
  }
];

const Container = styled.section`
  padding: 100px 15px;
`;

const BracketWrap = styled.div`
  min-height: 400px;
`;

class Tournament extends React.Component {
  state = {
    activeTab: 2
  };

  switchTab = newIndex => {
    this.setState({
      activeTab: newIndex
    });
  };
  render() {
    return (
      <Container>
        <Title style={{ marginBottom: "0.5em" }}>Tournament Bracket</Title>
        <TabBar
          tabs={CONFERENCE_TABS}
          switchTab={this.switchTab}
          activeTab={this.state.activeTab}
        />
        <BracketWrap>
          {this.state.activeTab === 0 && (
            <Bracket
              {...Sun}
              toggleModal={this.props.toggleModal}
              switchTab={this.switchTab}
            />
          )}
          {this.state.activeTab === 1 && (
            <Bracket
              {...Moon}
              toggleModal={this.props.toggleModal}
              switchTab={this.switchTab}
            />
          )}
          {this.state.activeTab === 2 && (
            <Bracket
              {...Stars}
              toggleModal={this.props.toggleModal}
              switchTab={this.switchTab}
            />
          )}
          {this.state.activeTab === 3 && (
            <Bracket
              {...Chaos}
              toggleModal={this.props.toggleModal}
              switchTab={this.switchTab}
            />
          )}
          {this.state.activeTab === 4 && (
            <Bracket {...Finals} toggleModal={this.props.toggleModal} />
          )}
        </BracketWrap>
      </Container>
    );
  }
}

export default Tournament;

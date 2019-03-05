import styled from "styled-components";
import Link from "next/link";

const tabWidth = 100;
const tabWidthMobile = 60;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto 100px;
`;

const TabRow = styled.div`
  display: flex;
  flex-direction: row;
  /* @media (max-width: 525px) {
    flex-direction: column;
  } */
`;

const Button = styled.div`
  align-items: center;
  cursor: pointer;
  font-size: 0.9em;
  display: flex;
  height: 35px;
  justify-content: center;
  letter-spacing: 0.1em;
  text-align: center;
  text-transform: uppercase;
  width: ${tabWidth}px;
  @media (max-width: 525px) {
    width: ${tabWidthMobile}px;
  }
`;

const ActiveLine = styled.div`
  height: 2px;
  width: ${tabWidth}px;
  background: ${props => props.theme.blue};
  transition: all 0.15s ease-in-out;
  @media (max-width: 525px) {
    display: none;
  }
`;

const ActiveLineMobile = styled.div`
  height: 2px;
  width: ${tabWidthMobile}px;
  background: ${props => props.theme.blue};
  transition: all 0.15s ease-in-out;
  @media (min-width: 525px) {
    display: none;
  }
`;

const Tab = ({ text, color, index, ...props }) => {
  // console.log(tabId);
  return (
    <Button onClick={() => props.switchTab(index)} style={{ color: color }}>
      {text}
    </Button>
  );
};

const TabBar = ({ tabs, activeTab, ...props }) => (
  <Container>
    <div>
      <TabRow>
        {tabs.map((t, i) => {
          return (
            <Tab
              {...t}
              index={i}
              switchTab={props.switchTab}
              active={activeTab === i}
              key={t.text}
            />
          );
        })}
      </TabRow>
      <ActiveLine
        style={{
          backgroundColor: tabs[activeTab].color,
          transform: `translateX(${activeTab * tabWidth}px)`
        }}
      />
      <ActiveLineMobile
        style={{
          backgroundColor: tabs[activeTab].color,
          transform: `translateX(${activeTab * tabWidthMobile}px)`
        }}
      />
    </div>
  </Container>
);

export default TabBar;

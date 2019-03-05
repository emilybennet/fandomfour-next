import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import DailyMatch from "../components/DailyMatch";
import Tournament from "../components/Tournament";

const HomePage = props => {
  return (
    <div>
      <Header />
      <DailyMatch />
      <Tournament />
      <Footer />
    </div>
  );
};

export default HomePage;

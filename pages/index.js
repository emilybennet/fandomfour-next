import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import DailyMatch from "../components/DailyMatch";
import Champion from "../components/Champion";
import Tournament from "../components/Tournament";
import Modal from "../components/Modal";

class HomePage extends React.Component {
  state = {
    modalContentId: null,
    showModal: false
  };

  toggleModal = (modalContentId = null) => {
    document.body.style.overflow = this.state.showModal ? "unset" : "hidden";
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      modalContentId
    }));
  };

  render() {
    return (
      <div>
        <Header />
        {/* <DailyMatch toggleModal={this.toggleModal} /> */}
        <Champion id="5×9" toggleModal={this.toggleModal} />
        <Tournament toggleModal={this.toggleModal} />
        <Footer />
        <Modal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          contentId={this.state.modalContentId}
        />
      </div>
    );
  }
}

export default HomePage;

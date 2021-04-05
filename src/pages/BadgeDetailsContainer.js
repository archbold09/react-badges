import React from "react";
import api from "../api";
import BadgeDetails from "./BadgeDetails";
import Loading from "../components/Loading/Index";
import Error from "../components/Error/Index";

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    modalIsOpen: false,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleDeleteBadge = async () => {
    this.setState({ loading: true, error: null });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = (event) => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = (event) => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    if (this.state.error) {
      return <Error error={this.state.error} />;
    }
    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data}
      />
    );
  }
}
export default BadgeDetailsContainer;

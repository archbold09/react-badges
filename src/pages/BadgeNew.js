import React from "react";

import "../components/styles/BadgeEdit.css";
import header from "../images/platziconf-logo.svg";
import Loading from "../components/Loading/Index";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import api from "../api";
class BadgeEdit extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarUrl:
        "https://s.gravatar.com/avatar/598176d2c108a3cfb93483fe2453358f",
    },
  };

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.mounted = true;
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            alt="Imagen header"
            src={header}
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>New Attendant</h1>
              <Badge
                firstName={this.state.form.firstName || "firstName"}
                lastName={this.state.form.lastName || "lastName"}
                jobTitle={this.state.form.jobTitle || "jobTitle"}
                twitter={this.state.form.twitter || "twitter"}
                email={this.state.form.email}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeEdit;

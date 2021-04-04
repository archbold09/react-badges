import React from "react";
import "../components/styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import api from "../api";
import Loading from "../components/Loading/Index";
import Error from "../components/Error/Index";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";
class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
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

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    if (this.state.error) {
      return <Error error={this.state.error} />;
    }
    return (
      <>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="logo de la conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {this.state.data.firstName} {this.state.data.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.data.firstName || "firstName"}
                lastName={this.state.data.lastName || "lastName"}
                jobTitle={this.state.data.jobTitle || "jobTitle"}
                twitter={this.state.data.twitter || "twitter"}
                email={this.state.data.email}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <Link
                  className="btn btn-primary mx-2 mb-2"
                  to={`/badges/${this.state.data.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button className="btn btn-danger mx-2 mb-2">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default BadgeDetails;

import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    const {
      firstName,
      lastName,

      jobTitle,
      twitter,
      email,
    } = this.props;

    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="badge_section-name">
          <Gravatar className="badge__avatar" email={email} alt="Avatar" />
          <h1>
            {firstName} <br /> {lastName}{" "}
          </h1>
        </div>

        <div className="badge_section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>

        <div className="badge_footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;

import React from "react";
import "../components/styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/Modal/DeleteBadgeModal";
import { Link } from "react-router-dom";
function BadgeDetails(props) {
  const badge = props.badge;
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
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName || "firstName"}
              lastName={badge.lastName || "lastName"}
              jobTitle={badge.jobTitle || "jobTitle"}
              twitter={badge.twitter || "twitter"}
              email={badge.email}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <Link
                className="btn btn-primary mx-2 mb-2"
                to={`/badges/${badge.id}/edit`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button
                onClick={props.onOpenModal}
                className="btn btn-danger mx-2 mb-2"
              >
                Delete
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BadgeDetails;

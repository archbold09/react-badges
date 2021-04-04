import React from "react";
import { Link } from "react-router-dom";
class BadgeList extends React.Component {
  handleState() {
    console.log(this.props.badges);
  }
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>Data not found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new Badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map((item) => {
          return (
            <li key={item.id}>
              <p>
                {item.firstName} {item.lastName}
              </p>
              <Link className="btn btn-primary" to={`/badges/${item.id}`}>
                Details
              </Link>
              <Link className="btn btn-primary" to={`/badges/${item.id}/edit`}>
                Edit
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;

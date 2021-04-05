import React from "react";
import { Link } from "react-router-dom";
function BadgeList(props) {
  const badges = props.badges;

  const [query, setQuery] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState("");
  // const filteredBadges = badges.filter((badge) => {
  //   return `${badge.firstName} ${badge.lastName}`
  //     .toLowerCase()
  //     .includes(query.toLowerCase());
  // });

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredResults(result);
  }, [badges, query]);

  if (filteredResults.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </div>
        <h3>Data not found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new Badge
        </Link>
      </div>
    );
  }

  return (
    <ul className="list-unstyled">
      <div className="form-group">
        <label>Filter badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>
      {filteredResults.map((item) => {
        return (
          <li key={item.id}>
            <p>
              {item.firstName} {item.lastName}
            </p>
            <Link className="btn btn-primary mr-4" to={`/badges/${item.id}`}>
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

export default BadgeList;

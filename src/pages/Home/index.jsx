import React from "react";
import PropTypes from "prop-types";
import { Link } from "../../../routes";

const propTypes = {
  data: PropTypes.array.isRequired
};

const defaultProps = {
  data: []
};

const Home = ({ data }) => {
  return (
    <div>
      {data.map(({ Title, imdbID }) => (
        <div>
          <div key={Title}>{Title}</div>
          <Link route={`/movie/${imdbID}`} as={`/movie/${imdbID}`}>
            <button>More Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default Home;

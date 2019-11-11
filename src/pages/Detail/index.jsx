import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.shape({}).isRequired
};

const Detail = ({ data }) => {
  return (
    <div>
      <div>Details :</div>
      {Object.keys(data).map((key, index) => (
        <div key={index}>
          <div>{index + 1}.</div>
          <div>{key} : </div>
          <div>{typeof data[key] === "string" ? data[key] : ""}</div>
        </div>
      ))}
    </div>
  );
};

Detail.propTypes = propTypes;
export default Detail;

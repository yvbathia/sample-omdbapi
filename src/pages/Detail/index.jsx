import React from "react";
import PropTypes from "prop-types";
import s from "./Detail.module.scss";
import { Link } from "../../../routes";

const propTypes = {
  data: PropTypes.shape({}).isRequired
};

const Detail = ({ data }) => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.text}>Details : </div>
        <div className={s.btn}>
          <Link route={`/`} as={`/`}>
            <button className={s.backBtn}>Back</button>
          </Link>
        </div>
      </div>
      <div className={s.poster}>{data && data["Poster"] && <img src={data["Poster"]} />}</div>
      <div className={s.other}>
        {Object.keys(data).map(
          (key, index) =>
            typeof data[key] === "string" &&
            key !== "Poster" && (
              <div key={index} className={s.component}>
                <div className={s.title}>{key} : </div>
                <div className={s.details}>{data[key]}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

Detail.propTypes = propTypes;
export default Detail;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "../../../routes";
import s from "./Home.module.scss";
import fetch from "isomorphic-unfetch";

const propTypes = {
  data: PropTypes.array.isRequired
};

const defaultProps = {
  data: []
};

const Home = ({ data }) => {
  const [movieState, setMovieState] = useState(data);
  const [searchText, setSearchText] = useState("");
  const handelOnSubmit = async e => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=7f90658b&s=${searchText}`
    );
    const data = await res.json();
    if(data && data.Error){
      alert("Movie Not Found");
      setSearchText('');
    }
    if (data && data.Search) {
      setMovieState(data.Search);
    }
  };
  return (
    <div className={s.root}>
      <div className={s.search}>
        <input
          type="text"
          name="name"
          className={s.searchText}
          placeholder="Enter Movie Name To Search"
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value);
          }}
        />
        <button type="button" onClick={handelOnSubmit} className={s.searchBtn}>
          Search
        </button>
      </div>
      {movieState.map(({ Title, imdbID }) => (
        <div className={s.component}>
          <div key={Title} className={s.title}>
            {Title}
          </div>
          <div className={s.details}>
            <Link route={`/movie/${imdbID}`} as={`/movie/${imdbID}`}>
              <button className={s.btn}>More Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default Home;

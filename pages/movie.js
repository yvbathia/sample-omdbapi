import { getPathArray } from "../src/utils";
import Detail from "../src/pages/Detail";
import fetch from "isomorphic-unfetch";

const Movie = props => {
  return <Detail data={props} />;
};

Movie.getInitialProps = async ({ asPath, res, query }) => {
  const pathArray = getPathArray(asPath);
  const id = pathArray[2];
  const resp = await fetch(`http://www.omdbapi.com/?apikey=7f90658b&i=${ id }`);
  const data = await resp.json();
  return data;
};

export default Movie;

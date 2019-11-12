import React from "react";
import Home from "../src/pages/Home";
import fetch from 'isomorphic-unfetch';


const Index = (props) => {
  const result = props.Search;
  return <Home data={result}/>;
};

Index.getInitialProps = async () => {
  const res = await fetch('http://www.omdbapi.com/?apikey=7f90658b&s=2019');
  const data = await res.json();

  return data;
};

export default Index;

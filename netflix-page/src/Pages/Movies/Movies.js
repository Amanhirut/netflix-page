import React from 'react';
import Row from "../../Components/Rows/Row/Row";
import requests from "../../utils/request";

function Movies() {
  return (
    <div>
      <h1>🎬 </h1>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default Movies;

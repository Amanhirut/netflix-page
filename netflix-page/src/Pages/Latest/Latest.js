import React from 'react';
import Row from "../../Components/Rows/Row/Row";
import requests from "../../utils/request";


function Latest() {
  return (
    <div>
      <h1>🔥 </h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default Latest;

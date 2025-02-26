import React from 'react';
import Row from "../Row/Row";
import requests from '../../../utils/request';

function RowList({ title, fetchUrl }) {
  if (title && fetchUrl) {
    return (
      <div>
        <Row title={title} fetchUrl={fetchUrl} />
      </div>
    );
  }
    return (
      <div>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row title="TV Shows" fetchUrl={requests.fetchTVShows} />
      </div>
    );
  }
  
export default RowList;
  


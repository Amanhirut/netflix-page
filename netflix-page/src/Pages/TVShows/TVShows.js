import React from "react";
import RowList from "../../Components/Rows/RowList/RowList"; 
import requests from "../../utils/request";


function TVShows() {
  return (
    <div>
      <h1>📺 </h1>
      <RowList title="TV SHOWS" fetchUrl={requests.fetchTVShows} />
    </div>
  );
}

export default TVShows;

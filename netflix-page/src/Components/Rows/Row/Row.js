// import React, { useState, useEffect } from 'react'
// import "./row.css";
// import axios from "../../../utils/axios";
// import { height, width } from '@mui/system';
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";


//     const Row = ({ title, fetchUrl, isLargeRow }) =>{
//         const [movies, setMovies] = useState([]);
//         const [trailerUrl, setTrailerUrl] = useState("");

//         const base_url = "https://image.tmdb.org/t/p/original/";

//         useEffect(() => {
//             (async () => {
//                 try {
//                     console.log(fetchUrl)
//                     const request = await axios.get(`http://localhost:3000/api/${fetchUrl}`);
//                     console.log(request)
                    
//                     setMovies(request.data.results);
//             } catch (error) {
//                 console.error("Error fetching movies:", error);
//         }})()
//         } , [fetchUrl]);

    

//      const handleClick = (movie) => {
//         if (trailerUrl) {
//           setTrailerUrl("");
//         } else {
//           movieTrailer(movie?.name || movie?.title || movie?.original_name)
//             .then((url) => {
//               const urlParams = new URLSearchParams(new URL(url).search);
//               setTrailerUrl(urlParams.get("v"));
//             })
//             .catch((error) => console.log(error));
//         }
//       };

//       const opts = {
//         height: "390",
//         width: "100%",
//         playervars:{
//             autoplay: 1,
//         },

//       }

//       return (
//         <div className="row">
//           <h2>{title}</h2>
//           <div className="row__posters">
//             {movies?.map((movie, index) => (
//               <img               
//                 onClick={() => handleClick(movie)}
//                 key = {index}
//                 className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//                 src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//                 alt={movie.name}
//               />
//             ))}
//           </div >
//           <div style = {{padding: "40px"}}>  {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//           </div>
//         </div>
//       );

//     }

// export default Row


import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "../../../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      try {
        const fullUrl = `https://api.themoviedb.org/3${fetchUrl}`;
        console.log("Fetching from:", fullUrl);
  
        const request = await axios.get(fullUrl);
        console.log("API Response:", request.data);
  
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);
  
  
  

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;

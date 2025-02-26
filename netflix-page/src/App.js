import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import TVShows from "./Pages/TVShows/TVShows";
import Movies from "./Pages/Movies/Movies";
import Latest from "./Pages/Latest/Latest"
import MyList from "./Pages/MyList/MyList";
import Languages from "./Pages/Languages/Languages";


function App() {
  return (
    <Router basename="/netflix-page">
      
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tvshows" element={<TVShows />} />
          <Route path="movies" element={<Movies />} />
          <Route path="latest" element={<Latest />} />
          <Route path="mylist" element={<MyList />} />
          <Route path="languages" element={<Languages />} />
        </Route>
      </Routes>
      
    </Router>
    
  );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "./Axios";
import requests from "./Request";
import "./Banner.css";

function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchSciFi);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log("banner", movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-buttoon">Play</button>
          <button className="banner-buttoon">My List</button>
        </div>

        <h1 className="banner-description">
          {truncate(movie?.overview, 150)}{" "}
        </h1>
      </div>
      <div className="banner-fade"></div>
    </header>
  );
}

export default Banner;

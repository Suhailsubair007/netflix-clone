import Row from "./Row";
import Banner from "./Banner";
import requests from "./Request";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchSciFi}
        isLargeRow
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="TV Shows" fetchUrl={requests.fetchTV} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Mystery" fetchUrl={requests.fetchMystery} />
      <Row title="Science Fi" fetchUrl={requests.fetchSciFi} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Hindi Movies" fetchUrl={requests.fetchActionHindiMovies} />

      <Footer />
    </div>
  );
}

export default App;

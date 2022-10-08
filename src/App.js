import React from "react";
import Navbar from "./components/Navbar";
import styled from 'styled-components'
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./Requests";
// import * as dotenv from 'dotenv';
// dotenv.config();

const Container = styled.div`
 width: 100%;
`

const App = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
    </Container>
  );
}

export default App;

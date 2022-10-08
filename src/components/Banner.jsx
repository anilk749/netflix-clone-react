import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import requests from '../Requests';
import axios from '../axios';

const Container = styled.div`
  min-height: 98vh;
  padding-top: 80px;
  padding-bottom: 10px;
  margin-bottom: 40px;
`
const Wrapper = styled.div`
  color: white;
  padding: 0 10px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`
const BannerTitle = styled.h2`
  max-width: 45%;
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 16px;
  line-height: 1.1;
`
const BannerInfo = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 14px;
`
const BannerOverview = styled.p`
  max-width: 40%;
  font-size: 1rem;
  line-height: 1.3;
`
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  padding: 8px 22px;
  margin-right: 11px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  :last-child {
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
  }
`

const Banner = () => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie( 
          request.data.results[
            Math.floor(Math.random() * request.data.results.length -1)
          ]
        )
    }
    fetchData();

  },[]);
  return (
    <Container style={
      {
        backgroundImage: `url(${imgBaseUrl}${movie.backdrop_path})`,
        backgroundSize: "cover",
        // backgroundPosition: "center center",
      }
    }>
      <Wrapper>
        <BannerTitle>{movie?.name || movie?.title || movie?.original_name}</BannerTitle>
        <BannerInfo>Rating - {movie.vote_average} | Released - {movie.first_air_date || movie.release_date}</BannerInfo>
        <BannerOverview>{movie.overview && movie.overview.length > 200 ? movie.overview.slice(0,200).trim() + "..." : movie.overview}</BannerOverview>
        <ButtonWrapper>
          <Button><PlayArrowIcon />&nbsp;&nbsp; Play</Button>
          <Button><InfoOutlinedIcon />&nbsp;&nbsp; More Info</Button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  )
}

export default Banner
import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from '../axios'

const Container = styled.div`
  width: 100%;
  max-width: 1250px; 
  margin: 0 auto;
  margin-bottom: 20px;
`
const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  margin: 0;
  margin-bottom: 10px;
`
const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }

`
const Image = styled.img`
  height: 200px;
  object-fit: contain;
  margin-right: 8px;
  border-radius: 8px;

  &:hover {
    transform: scale(1.2);
    transition: all 0.6s ease;
  }
`

const Row = ({title,fetchUrl}) => {
  //Consts
  const imgBaseUrl = "https://image.tmdb.org/t/p/original";

  //states
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMoviesList(request.data.results);
      return request;
    }
    fetchData();

  },[fetchUrl]);
  // console.log(moviesList);
  return (
    <Container>
        <Title>{title}</Title>
        <Slider>
          {moviesList.map(item => <Image key={item.id} src={`${imgBaseUrl}${item.poster_path}`}/>)}
        </Slider>
    </Container>
  )
}

export default Row

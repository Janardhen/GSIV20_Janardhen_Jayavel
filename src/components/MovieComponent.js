import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 200px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 3px 10px 0 #aaa;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 230px;
`;
const MovieName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: black;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
const MovieComponent = (props) => {
  const { title, overview, id, poster_path } = props.movie;

  return (
    <MovieContainer onClick={() => props.onMovieSelect(id)}>
      <CoverImage
        src={`http://image.tmdb.org/t/p/w185/${poster_path}`}
        alt={title}
      />
      <MovieName>{title}</MovieName>
      <InfoColumn>
        <MovieInfo>{overview}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};
export default MovieComponent;

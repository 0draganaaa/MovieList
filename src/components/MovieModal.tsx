import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { Modal, CloseButton, Container, Col, Row, Button } from "react-bootstrap";
import { IMovie } from "../types/movies";
import { MovieContext } from "../context/MovieProvider";
import { AddMovieToListModal } from "./AddMovieToListModal";

export const MovieModal: FunctionComponent<{
  movie: IMovie | null;
  closeModal: () => void;
}> = ({ movie, closeModal }) => {

  const [movieIdToAdd, setMovieIdToAdd] = useState<number | null>(null);

  const movieCntx = useContext(MovieContext);

  const selectedMovie = movieCntx?.selectedMovie;

  const movieYear: number | string = selectedMovie
    ? new Date(selectedMovie.releaseDate).getFullYear()
    : "N/A";

  useEffect(() => {
    if (movie) {
      movieCntx?.getMovieDetails(movie?.id);
    }
  }, [movie, movieCntx])

  return (
    movie && selectedMovie ? (
      <Modal
        show={!!movie}
        size="lg"
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="button-container">
          <CloseButton onClick={closeModal} />
        </div>
        <Modal.Header className="header pt-0">
          <div className="fs-1 text-center w-100">{selectedMovie.title}</div>
        </Modal.Header>
        <Modal.Body className="content">
          <img className="poster" src={selectedMovie.posterPath} alt="movie-poster" />
          <Container className="info text-center">
            <h4>
              {selectedMovie.title}, {movieYear}
            </h4>
            <h6>
              {selectedMovie.genres.map(genre => genre.name).join(", ")}
            </h6>
            <p>{selectedMovie.overview}</p>
          </Container>
          <Container className="info text-center additional-info">
            <Row className="mb-4">
              <Col>Runtime <br /> {selectedMovie.runtime}min </Col>
              <Col>Budget <br /> ${selectedMovie.budget} </Col>
              <Col>Revenue <br /> ${selectedMovie.revenue} </Col>
              <Col>Adult <br /> {selectedMovie.adult ? 'Yes' : 'No'}</Col>
            </Row>
            <Row>
              <Button onClick={() => setMovieIdToAdd(selectedMovie.id)}>Add the movie to a list</Button>
            </Row>
          </Container>
          <AddMovieToListModal movieId={movieIdToAdd} setMovieId={setMovieIdToAdd} /> 
        </Modal.Body>
      </Modal>
    ) : null
  );
};

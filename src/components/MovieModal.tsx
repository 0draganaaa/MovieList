import React, { FunctionComponent } from "react";
import { Modal, CloseButton, Container } from "react-bootstrap";
import { IMovie } from "../types/movies";

export const MovieModal: FunctionComponent<{
  movie: IMovie | null;
  closeModal: () => void;
}> = ({ movie, closeModal }) => {
  const movieYear: number | string = movie
    ? new Date(movie.releaseDate).getFullYear()
    : "N/A";

  return (
    movie && (
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
          <div className="fs-1 text-center w-100">{movie.title}</div>
        </Modal.Header>
        <Modal.Body className="content">
          <img className="poster" src={movie.posterPath} />
          <Container className="info text-center">
            <h5>
              {movieYear}, {movie.genres ? movie.genres.join("/") : []},
              {` ${movie.direction}`}
            </h5>
            <p>{movie.overview}</p>
          </Container>
        </Modal.Body>
      </Modal>
    )
  );
};

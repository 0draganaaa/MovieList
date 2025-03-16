import { useContext, useEffect } from "react"
import { ListContext } from "../context/ListProvider"
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import { MovieContext } from "../context/MovieProvider";
import { MovieList } from "../components/MovieList";

export const List = () => {

  const listCntx = useContext(ListContext);
  const movieCntx = useContext(MovieContext);

  const setSelectedMovie = movieCntx?.setSelectedMovie;

  const list = listCntx?.list;

  const { id } = useParams<{ id: string }>();
  const listId = Number(id);

  useEffect(() => {
    if (id && !isNaN(listId)) {
      listCntx?.getListContent(listId);
    }
  }, [id, listCntx, listId])

  const removeFromList = (movieId: number) => {
    listCntx?.removeMovieFromTheList(listId, movieId);
  }

  return (
    <Container className="mt-4">
      <h1 className="text-center app-text">{list?.name}</h1>
      <h5 className="text-center app-text">{list?.description}</h5>
      <Container className="main-container mt-5">
        {setSelectedMovie && list?.items ? (
          <MovieList movies={list?.items} removeFromList={removeFromList} />) : null}
      </Container>
    </Container>
  )
}
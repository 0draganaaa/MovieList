import { FunctionComponent, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "./Card";
import { IMovie } from "../types/movies";
import { MovieModal } from "./MovieModal";

export const MovieList: FunctionComponent<{
	movies: IMovie[];
	removeFromList?: (id: number) => void;
}> = ({ movies, removeFromList }) => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);

	return (
		<Container>
			<Row>
				{movies.length ? (
					movies.map((movie: IMovie) => (
						<Col key={movie.id} xs={12} sm={6} lg={4}>
							<Card
								movie={movie}
								setSelectedMovie={setSelectedMovie}
								removeFromList={removeFromList ? () => removeFromList(movie.id) : undefined}
							/>
						</Col>
					))
				) : (
					<Col className="no-movies fs-5 text-center">
						No movies are available.
					</Col>
				)}
			</Row>
			<MovieModal
          movie={selectedMovie}
          closeModal={() => {
            setSelectedMovie(null);
          }}
        />
		</Container>
	);
};

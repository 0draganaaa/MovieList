import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "./Card";
import { IMovie } from "../types/movies";

export const MovieList: FunctionComponent<{
	movies: IMovie[];
	setSelectedMovie: Dispatch<SetStateAction<IMovie | null>>;
}> = ({ movies, setSelectedMovie }) => {
	return (
		<Container>
			<Row>
				{movies.length ? (
					movies.map((movie: IMovie) => (
						<Col key={movie.id} xs={4} sm={6} lg={4}>
							<Card
								movie={movie}
								setSelectedMovie={setSelectedMovie}
							/>
						</Col>
					))
				) : (
					<Col className="no-movies fs-5 text-center">
						No movies with given title are available.
					</Col>
				)}
			</Row>
		</Container>
	);
};

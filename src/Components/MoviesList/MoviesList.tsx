import { FC } from 'react';
import { MovieItem } from '../MovieItem';
import { IMovie } from '../MovieItem/MovieItem';

interface IMovies {
	movies: IMovie[];
}

export const MoviesList: FC<IMovies> = ({ movies }) => {
	return (
		<ul style={{ display: 'flex', flexWrap: 'wrap', gap: 50 }}>
			{movies.map(movie => (
				<MovieItem key={movie.id} movie={movie} />
			))}
		</ul>
	);
};

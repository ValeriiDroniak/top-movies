import { FC } from 'react';
import { ContentItem } from '../ContentItem';
import { IMovie } from '../ContentItem/ContentItem';

interface IMovies {
	movies: IMovie[];
}

export const ContentList: FC<IMovies> = ({ movies }) => {
	return (
		<ul style={{ display: 'flex', flexWrap: 'wrap', gap: 50 }}>
			{movies.map(movie => (
				<ContentItem key={movie.id} movie={movie} />
			))}
		</ul>
	);
};

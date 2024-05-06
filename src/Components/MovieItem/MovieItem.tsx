import { FC } from 'react';
import { createPosterUrl } from '../../services/api';

export interface IMovie {
	title: string; // Назва
	id: number; // Айдішка
	genre_ids: number[]; // Жанри
	backdrop_path: string;
	original_title: string; // Оригінальна назва
	overview: string; // Короткий опис фільму
	popularity: number; // Кількість переглядів
	poster_path: string; // Постер
	release_date: string; // Дата виходу
	vote_average: number; // Рейтинг користувачів
	vote_count: number; // Кількість оцінок
}

type Props = {
	movie: IMovie;
};

export const MovieItem: FC<Props> = ({ movie }) => {
	const { title, poster_path, overview } = movie;
	return (
		<li style={{ display: 'flex', maxWidth: 'calc(50% - 50px)', gap: 16 }}>
			<img
				src={createPosterUrl(poster_path)}
				alt={title}
				style={{ maxWidth: 120, height: 200 }}
			></img>
			<div>
				<h2>{title}</h2>
				<p>{overview}</p>
			</div>
		</li>
	);
};

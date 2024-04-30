import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';
const API_TOKEN =
	'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTBiMTEzMjhjZjZlZWNiM2FkZjA0MjQxNjRkYTcwOSIsInN1YiI6IjYzNjNiNWNhODI4OWEwMDA3ZThhNzI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ekhiw3yoMFjIkFLJOnHZufQaW02DyTiGxIumCMmiNZo';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common = {
	Accept: 'application/json',
	Authorization: `Bearer ${API_TOKEN}`,
};

const reguest = {
	list: {
		movie: {
			popular: '/movie/popular',
			topRated: '/movie/top_rated',
			nowPlaying: '/movie/now_playing', // Date min-max
			upcoming: '/movie/upcoming',
		},
		tv: {},
	},
	genres: { movie: '/genre/movie/list', tv: '/genre/movie/list' }, // language
};

// const paramsRequest = {
// 	language: 'uk-UA',
// 	page: 1,
// };

export const createPosterUrl = (path: string) => BASE_URL_POSTER + path;

export const getPopular = async (page = 1) => {
	axios.defaults.params = {
		language: 'uk-UA',
		page,
	};

	const response = await axios.get(reguest.list.movie.popular);
	return response.data.results;
};

export const getTopRated = async (page = 1) => {
	axios.defaults.params = {
		language: 'uk-UA',
		page,
	};

	const response = await axios.get(reguest.list.movie.topRated);
	return response.data.results;
};

import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { ContentList } from '../Components/ContentList';
import { getPopular } from '../services/api';

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getPopular(1).then(setMovies).catch(console.log);
	}, []);
	return (
		<Box component={'section'}>
			<Container>
				<h1>Головна сторінка</h1>
				<ContentList movies={movies} />
			</Container>
		</Box>
	);
};

export default Home;

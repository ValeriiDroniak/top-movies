import { Box, Container } from '@mui/material';
import { navData } from '../../data/navData';
import { Auth } from '../Auth';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { SearchForm } from '../SearchForm';

export const Header = () => {
	return (
		<Box
			component={'header'}
			sx={{
				position: 'fixed',
				width: '100%',
				bgcolor: 'rgba(40, 44, 53, 0.9)',
				overflow: 'hidden',
			}}
		>
			<Container
				maxWidth="xl"
				sx={{
					display: 'flex',
					gap: '9.6rem',
				}}
			>
				<Logo />

				<Box
					sx={{
						display: 'flex',
						gap: '3.6rem',
						flexGrow: 1,
						alignItems: 'center',
					}}
				>
					<SearchForm />
					<Navigation data={navData} />
					<Auth />
				</Box>
			</Container>
		</Box>
	);
};

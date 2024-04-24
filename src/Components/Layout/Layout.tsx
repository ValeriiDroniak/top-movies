import { Box } from '@mui/material';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
			}}
		>
			<header>
				<Box component={'nav'}>
					<NavLink to={'/movies'}>Фільми</NavLink>
					<NavLink to={'/serials'}>Серіали</NavLink>
					<NavLink to={'/cartoons'}>Мультфільмами</NavLink>
				</Box>
			</header>
			<Box
				component={'main'}
				sx={{
					flexGrow: 1,
					outline: '1px solid red',
				}}
			>
				<Box component={'section'} sx={{ padding: '64px 0' }}>
					<Suspense fallback={null}>
						<Outlet />
					</Suspense>
				</Box>
			</Box>
		</Box>
	);
};

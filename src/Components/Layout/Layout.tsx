import { Box } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

export const Layout = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
			}}
		>
			<Header />
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

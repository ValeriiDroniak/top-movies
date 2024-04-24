import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';

const HomePage = lazy(() => import('../../pages/Home'));
const MoviesPage = lazy(() => import('../../pages/Movies'));
const SerialsPage = lazy(() => import('../../pages/Serials'));
const CartoonsPage = lazy(() => import('../../pages/Cartoons'));
const NotFoundPage = lazy(() => import('../../pages/NotFound'));

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/movies" element={<MoviesPage />} />
				<Route path="/serials" element={<SerialsPage />} />
				<Route path="/cartoons" element={<CartoonsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

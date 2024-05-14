import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

const HomePage = lazy(() => import('./pages/Home'));
const MoviesPage = lazy(() => import('./pages/Movies'));
const SerialsPage = lazy(() => import('./pages/Serials'));
const CartoonsPage = lazy(() => import('./pages/Cartoons'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/serials" element={<SerialsPage />} />
					<Route path="/cartoons" element={<CartoonsPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;

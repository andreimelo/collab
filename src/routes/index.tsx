import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

interface Props {}

const Home = lazy(async () => {
	const module = await import('../pages/Home');
	return module;
});
const Error404 = lazy(async () => {
	const module = await import('../pages/Error404');
	return module;
});

const Routers: React.FC<Props> = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<h1>Loading.....</h1>}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default Routers;

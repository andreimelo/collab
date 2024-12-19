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

const Login = lazy(async () => {
	const module = await import('../pages/authentication/Login');
	return module;
});

const CreateAccount = lazy(async () => {
	const module = await import('../pages/authentication/CreateAccount');
	return module;
});

const SignUpWEmail = lazy(async () => {
	const module = await import('../pages/authentication/CreateAccount/SignUpEmail');
	return module;
});

const Routers: React.FC<Props> = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<h1>Loading.....</h1>}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/enter' element={<Login />} />
					<Route path='/new-user' element={<CreateAccount />} />
					<Route path='/new-user/email' element={<SignUpWEmail />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default Routers;

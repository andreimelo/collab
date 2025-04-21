import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

interface Props {}

const HomePage = lazy(async () => {
	const module = await import('../pages/Home');
	return module;
});

const AboutPage = lazy(async () => {
	const module = await import('../pages/About');
	return module;
});
const Error404Page = lazy(async () => {
	const module = await import('../pages/Error404');
	return module;
});

const LoginPage = lazy(async () => {
	const module = await import('../pages/authentication/Login');
	return module;
});

const CreateAccountPage = lazy(async () => {
	const module = await import('../pages/authentication/CreateAccount');
	return module;
});

const SignUpWEmailPage = lazy(async () => {
	const module = await import('../pages/authentication/CreateAccount/SignUpEmail');
	return module;
});

const UserDashboardPage = lazy(async () => {
	const module = await import('../pages/user/LandingDashboard');
	return module;
});

const UserEditProfilePage = lazy(async () => {
	const module = await import('../pages/user/EditProfile');
	return module;
});

const UserPostsPage = lazy(async () => {
	const module = await import('../pages/user/PostsPage');
	return module;
});

const UserProfilePage = lazy(async () => {
	const module = await import('../pages/user/ProfilePage');
	return module;
});

const UserProfileDetailPage = lazy(async () => {
	const module = await import('../pages/user/ProfileDetail');
	return module;
});

const Routers: React.FC<Props> = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<h1>Loading.....</h1>}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/enter' element={<LoginPage />} />
					<Route path='/new-user' element={<CreateAccountPage />} />
					<Route path='/new-user/email' element={<SignUpWEmailPage />} />
					<Route path='/dashboard' element={<UserDashboardPage />} />
					<Route path='/profile' element={<UserProfilePage />} />
					<Route path='/profile/:id' element={<UserProfileDetailPage />} />
					<Route path='/posts' element={<UserPostsPage />} />
					<Route path='/edit-profile' element={<UserEditProfilePage />} />
					<Route path='*' element={<Error404Page />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default Routers;

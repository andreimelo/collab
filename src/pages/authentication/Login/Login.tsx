import React from 'react';
import { Link } from 'react-router-dom';
import { CollabLogo } from '@assets';

interface Props {}

const Login: React.FC<Props> = () => {
	return (
		// temporary - need refactor
		<div className='min-h-screen flex place-self-center flex-col justify-center'>
			<img src={CollabLogo} className='w-32 mb-7 mx-auto' alt='Vite logo' />
			<label className='mb-2'>Email</label>
			<input type='text' className='border p-2 mb-10 h-12 rounded' />
			<label className='mb-2'>Password</label>
			<input type='password' className='border p-2 mb-10 h-12 rounded' />
			<button className='border h-12 rounded bg-blue-600 text-white'>Log in</button>
			<hr className='my-10' />
			<div>
				New to Collab Community?{' '}
				<Link to='/new-user' className='text-blue-600 underline'>
					Create account
				</Link>
			</div>
		</div>
	);
};

export default Login;

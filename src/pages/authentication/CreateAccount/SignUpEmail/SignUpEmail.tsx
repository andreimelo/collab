import React from 'react';
import { Link } from 'react-router-dom';
import { CollabLogo } from '@assets';

interface Props {}

const SignUpEmail: React.FC<Props> = () => {
	return (
		// temporary - need refactor
		<div className='min-h-screen flex place-self-center flex-col justify-center'>
			<Link to='/' className='text-blue-600 underline'>
				<img src={CollabLogo} className='w-32 mb-7 mx-auto' alt='Collab logo' />
			</Link>
			<label className='mb-2'>Name</label>
			<input type='text' className='border p-2 mb-10 h-12 rounded' />
			<label className='mb-2'>Email</label>
			<input type='text' className='border p-2 mb-10 h-12 rounded' />
			<label className='mb-2'>Password</label>
			<input type='password' className='border p-2 mb-10 h-12 rounded' />
			<label className='mb-2'>Re-enter Password</label>
			<input type='password' className='border p-2 mb-10 h-12 rounded' />
			<button className='border h-12 rounded bg-blue-600 text-white'>
				Sign up
			</button>
			<hr className='my-10' />
			<div className='text-center mx-8'>
				Already have an account?{' '}
				<Link to='/enter' className='text-blue-600 underline'>
					Log in
				</Link>
			</div>
		</div>
	);
};

export default SignUpEmail;

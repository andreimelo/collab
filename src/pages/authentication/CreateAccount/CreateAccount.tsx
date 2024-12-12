import React from 'react';
import { CollabLogo } from '@assets';
import { Link } from 'react-router-dom';

interface Props {}

const CreateAccount: React.FC<Props> = () => {
	return (
		// temporary - need refactor
		<div className='min-h-screen flex place-self-center flex-col justify-center'>
			<img src={CollabLogo} className='w-32 mb-10 mx-auto' alt='Vite logo' />
			<button className='p-4 mb-8 border rounded'>Sign up with Github</button>
			<button className='p-4 mb-8 border rounded'>Sign up with Facebook</button>
			<button className='p-4 mb-8 border rounded'>Sign up with Gmail</button>
			<hr className='mb-10' />
			<div>
				Already have an account?{' '}
				<Link to='/enter' className='text-blue-600 underline'>
					Log in
				</Link>
			</div>
		</div>
	);
};

export default CreateAccount;

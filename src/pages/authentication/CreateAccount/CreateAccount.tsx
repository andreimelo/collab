import React from 'react';
import { CollabLogo, Github, Fb, Google } from '@assets';
import { Link } from 'react-router-dom';

interface Props {}

const CreateAccount: React.FC<Props> = () => {
	return (
		// temporary - need refactor
		<div className='min-h-screen flex place-self-center flex-col justify-center'>
			<img src={CollabLogo} className='w-32 mb-10 mx-auto' alt='Vite logo' />
			<button className='flex p-3 mb-8 border rounded'>
				<img src={Github} className='w-26 ml-2' alt='Github logo' />
				<label className='px-16 leading-loose'>Sign up with Github</label>
			</button>
			<button className='flex p-3 mb-8 border rounded'>
				<img src={Fb} className='w-26 ml-2' alt='Facebook logo' />
				<label className='px-16 leading-loose'> Sign up with Facebook</label>
			</button>
			<button className='flex p-3 mb-8 border rounded'>
				<img src={Google} className='w-26 ml-2' alt='Google logo' />
				<label className='px-16 leading-loose'>Sign up with Google</label>
			</button>
			<hr className='mb-10' />
			<div className='text-center'>
				Already have an account?{' '}
				<Link to='/enter' className='text-blue-600 underline'>
					Log in
				</Link>
			</div>
		</div>
	);
};

export default CreateAccount;

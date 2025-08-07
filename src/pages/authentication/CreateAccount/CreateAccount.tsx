import React from 'react';
import { CollabLogo, Github, Fb, Google, Mail } from '@assets';
import { Link } from 'react-router-dom';

interface Props {}

const CreateAccount: React.FC<Props> = () => {
	return (
		// temporary - need refactor
		<div className='min-h-screen flex place-self-center flex-col justify-center'>
			<Link to='/' className='text-blue-600 underline'>
				<img src={CollabLogo} className='w-32 mb-7 mx-auto' alt='Collab logo' />
			</Link>
			<button className='flex p-3 mb-8 border rounded'>
				<img
					src={Github}
					className='place-self-center w-26 ml-2 cursor-pointer'
					alt='Github logo'
				/>
				<div className='px-16 leading-loose '>Sign up with Github</div>
			</button>
			<button className='flex p-3 mb-8 border rounded'>
				<img
					src={Fb}
					className='place-self-center w-26 ml-2'
					alt='Facebook logo'
				/>
				<div className='px-16 leading-loose'> Sign up with Facebook</div>
			</button>
			<button className='flex p-3 mb-8 border rounded'>
				<img
					src={Google}
					className='place-self-center w-26 ml-2'
					alt='Google logo'
				/>
				<div className='px-16 leading-loose'>Sign up with Google</div>
			</button>
			<Link to='/new-user/email'>
				<button className='flex p-3 mb-8 border rounded w-full'>
					<img
						src={Mail}
						className='place-self-center w-26 ml-2'
						alt='Email logo'
					/>
					<div className='px-16 leading-loose'>Sign up with Email</div>
				</button>
			</Link>
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

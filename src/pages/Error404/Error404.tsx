import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer3D } from '@assets';

interface Props {}

const Error404: React.FC<Props> = () => {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center '>
			<div className='flex mb-11'>
				<h1 className='text-6xl font-bold text-gray-800'>404 </h1>
				<img src={Hammer3D} className='logo' alt='Hammer3D Icon' />
			</div>
			<div className='text-lg text-gray-600 mb-11'> Page does not exist</div>
			<Link to='/' className='text-blue-600 hover:underline text-lg font-medium'>
				{'<<'} Redirect to Home
			</Link>
		</div>
	);
};

export default Error404;

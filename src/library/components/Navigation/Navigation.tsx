import React from 'react';
import { CollabLogo } from '@assets';
import { Link } from 'react-router-dom';

interface Props {}

const Navigation: React.FC<Props> = () => {
	return (
		// temporary - need refactor
		<React.Fragment>
			<nav className='flex flex-col justify-between lg:flex-row bg-white max-w-8xl mx-auto p-4 sm:px-6 lg:px-8'>
				<img src={CollabLogo} className='logo' alt='Vite logo' />
				<ul className='flex'>
					<Link to='/enter'>
						<li className='p-4'>Login</li>
					</Link>
					<Link to='/new-user'>
						<li className='p-4'>Create an account</li>
					</Link>
				</ul>
			</nav>
		</React.Fragment>
	);
};

export default Navigation;

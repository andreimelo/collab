import React from 'react';
import { CollabLogo } from '@assets';

interface Props {}

const Navigation: React.FC<Props> = () => {
	return (
		// temporary - need refactor
		<React.Fragment>
			<div>
				<img src={CollabLogo} className='logo' alt='Vite logo' />
				<nav>Navigation Component</nav>
			</div>
		</React.Fragment>
	);
};

export default Navigation;

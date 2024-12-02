import React from 'react';
import { CollabLogo } from '@assets';

interface Props {}

const Navigation: React.FC<Props> = () => {
	return (
		<div>
			<img src={CollabLogo} className='logo' alt='Vite logo' />
			Navigation Component
		</div>
	);
};

export default Navigation;

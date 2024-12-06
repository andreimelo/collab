import React from 'react';
import Navigation from '@library/components/Navigation';
import Footer from '@library/components/Footer';
import LayoutProvider from '@library/layouts/LayoutProvider';

interface Props {}

const Home: React.FC<Props> = () => {
	return (
		<LayoutProvider footerElement={<Footer />} navigationElement={<Navigation />}>
			<div>Insert content</div>
		</LayoutProvider>
	);
};

export default Home;

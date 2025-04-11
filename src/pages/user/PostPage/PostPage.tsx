import React from 'react';
import LayoutProvider from '@library/layouts/LayoutProvider';
import Navigation from '@library/components/Navigation';
import Footer from '@library/components/Footer';
// import { Link } from 'react-router';

interface Props {}

const PostPage: React.FC = () => {
	return (
		<LayoutProvider
			classContainer='font-family-helveltica bg-gray-100 max-w-8xl mx-auto p-4 sm:px-6 lg:px-8'
			footerElement={<Footer />}
			navigationElement={<Navigation />}
		>
			<div>Welcome to Post Page</div>
		</LayoutProvider>
	);
};

export default PostPage;

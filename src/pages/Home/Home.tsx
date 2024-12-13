import React from 'react';
import Navigation from '@library/components/Navigation';
import PostCard from '@library/components/Card';
import Footer from '@library/components/Footer';
import LayoutProvider from '@library/layouts/LayoutProvider';
import './index.css';

interface Prop {}

const Home: React.FC = () => {
	return (
		//
		<LayoutProvider
			classContainer='font-family-helveltica bg-gray-100 max-w-8xl mx-auto p-4 sm:px-6 lg:px-8'
			footerElement={<Footer />}
			navigationElement={<Navigation />}
		>
			{/* temporary - need refactor */}
			<div className='flex flex-col lg:flex-row'>
				<aside className='border bg-white rounded-lg h-fit lg:w-1/4 p-7 lg:mb-0'>
					<h2 className='text-xl font-bold mb-2'>Popular Tags</h2>
					<ul className='text-gray-600 leading-normal'>
						<li>#webdev</li>
						<li>#frontend</li>
						<li>#backend</li>
						<li>#softwareengr</li>
					</ul>
				</aside>
				<main className='lg:w-2/4 mx-4'>
					<PostCard
						classCardContainer='border bg-white p-4 rounded-lg mb-4'
						classTitle='font-family-georgia text-xl font-bold m-2'
						classDescription='mb-4'
						classPostSection='flex justify-between mb-7'
						classAvatarContainer='flex flex-row text-sm text-gray-600'
						classCommentSection='flex px-4 text-sm text-gray-600'
						title='If you&#39;re a beginner, definitely check this open source guide. I&#39;ve explained almost everything you need to know.'
						description=''
						author='Ash Shoe'
						timestamp='Posted 1 minute ago'
					/>
					<PostCard
						classCardContainer='border bg-white p-4 rounded-lg mb-4'
						classTitle='font-family-georgia text-xl font-bold m-2'
						classDescription='mb-4'
						classPostSection='flex justify-between mb-7'
						classAvatarContainer='flex flex-row text-sm text-gray-600'
						classCommentSection='flex px-4 text-sm text-gray-600'
						title='The best way to write a code.'
						description=''
						author='Ash Shoe'
						timestamp='Posted 1 minute ago'
					/>
					<PostCard
						classCardContainer='border bg-white p-4 rounded-lg mb-4'
						classTitle='font-family-georgia text-xl font-bold m-2'
						classDescription='mb-4'
						classPostSection='flex justify-between mb-7'
						classAvatarContainer='flex flex-row text-sm text-gray-600'
						classCommentSection='flex px-4 text-sm text-gray-600'
						title='If you&#39;re a beginner, definitely check this open source guide. I&#39;ve explained almost everything you need to know.'
						description=''
						author='Ash Shoe'
						timestamp='Posted 1 minute ago'
					/>
				</main>
				<aside className='border bg-white rounded-lg h-fit lg:w-1/4 p-7 lg:mb-0'>
					<h2 className='text-xl font-bold mb-2'>Recommended Friends</h2>
					<ul className='text-gray-600 leading-normal'>
						<li>Jane Doe</li>
						<li>John Smith</li>
						<li>Michael Johnson</li>
					</ul>
				</aside>
			</div>
		</LayoutProvider>
	);
};

export default Home;

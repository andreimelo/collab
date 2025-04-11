import React from 'react';
import LayoutProvider from '@library/layouts/LayoutProvider';
import Navigation from '@library/components/Navigation';
import PostCard from '@library/components/Card';
// import Footer from '@library/components/Footer';
// import { Link } from 'react-router';

interface Props {}

const PostsPage: React.FC = () => {
	// temporary - tb refactor
	return (
		<LayoutProvider
			classContainer='font-family-helveltica bg-gray-100 max-w-8xl mx-auto p-4 sm:px-6 lg:px-8'
			// footerElement={<Footer />}
			navigationElement={<Navigation />}
		>
			<div className='flex flex-col lg:flex-row'>
				<div className='lg:w-1/4 lg:mb-0'>
					<aside className='border bg-white rounded-lg p-7 h-fit'>
						<h2 className='text-xl font-bold mb-2'>Lorem Ipsum</h2>
						<ul className='text-gray-600 leading-normal'>
							<li>#webdev</li>
							<li>#frontend</li>
							<li>#backend</li>
							<li>#softwareengr</li>
						</ul>
					</aside>
				</div>
				<main className='lg:w-2/4 mx-4 font-semibold'>
					<div className='flex flex-col border bg-white rounded-lg p-7'>
						<div>Welcome to community! 👥</div>
						<textarea
							className='w-full text-sm font-normal my-3 p-2 rounded-lg border'
							placeholder={`What's on your mind, [Name]?`}
						/>
						<button className='bg-blue-400 p-2 rounded-lg my-3 text-white'>
							Post
						</button>
					</div>

					<PostCard
						classCardContainer='border bg-white p-4 rounded-lg mb-4 my-3'
						classTitle='font-family-georgia text-xl m-2'
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
				</aside>
			</div>
		</LayoutProvider>
	);
};

export default PostsPage;

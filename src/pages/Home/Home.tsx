import React from 'react';
import Navigation from '@library/components/Navigation';
import Footer from '@library/components/Footer';
import LayoutProvider from '@library/layouts/LayoutProvider';


interface Props { title: string; description: string; author: string; timestamp: string; }

const Home: React.FC = () => {
	const Post: React.FC<Props> = ({ title, description, author, timestamp }) => ( 
		<div className="border bg-white p-4 rounded-lg mb-4">
			<h2 className="text-xl font-bold mb-2">{title}</h2>
			<p className="mb-4">{description}</p>
			<div className="flex items-center justify-between text-sm text-gray-600"> <span>{author}</span> <span>{timestamp}</span> </div>
			<div className="flex items-center mt-2"> <button className="mr-4">5 reactions</button> <button>Add Comment</button> </div>
		</div>
	);
	
	return (
		// 
		<LayoutProvider classContainer="bg-gray-100 max-w-8xl mx-auto p-4 sm:px-6 lg:px-8" footerElement={<Footer />} navigationElement={<Navigation />}>
			{/* temporary - need refactor */}
			<div className="flex flex-col lg:flex-row">
				<aside className="border bg-white rounded-lg h-fit lg:w-1/4 p-7 lg:mb-0">
					<h2 className="text-xl font-bold mb-2">Popular Tags</h2>
					<ul>
						<li>#webdev</li>
						<li>#frontend</li>
						<li>#backend</li>
						<li>#softwareengr</li>
					</ul>
				</aside>
				<main className="lg:w-2/4 mx-4">
					<Post title="If you're a beginner, definitely check this open source guide. I've explained almost everything you need to know." description="" author="Ash Shoe" timestamp="Posted 1 minute ago" />
					<Post title="The best way to write a code." description="" author="Ash Shoe" timestamp="Posted 1 minute ago" />
					<Post title="If you're a beginner, definitely check this open source guide. I've explained almost everything you need to know." description="" author="Ash Shoe" timestamp="Posted 1 minute ago" />
				</main>
				<aside className="border bg-white rounded-lg h-fit lg:w-1/4 p-7 lg:mb-0">
					<h2 className="text-xl font-bold mb-2">Recommended Friends</h2>
					<ul>
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
